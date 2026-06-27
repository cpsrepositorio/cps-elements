import '../spinner.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './table-view.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * Folha de estilo aplicada aos descendentes do `<table>`, que vivem no _light DOM_
 * (projetados via _slot_) e, portanto, não são alcançáveis pelo CSS do _shadow DOM_.
 * É injetada uma única vez no documento e fica escopada em `cps-table-view`, lendo os
 * atributos refletidos do hospedeiro (density, zebra, sticky-*) para variar o visual.
 */
const lightDomStyles = `
cps-table-view table {
  width: 100%;
  border-collapse: collapse;
  color: var(--cps-color-text-primary);
  font: var(--cps-font-body);
}
cps-table-view :where(th, td) {
  padding: var(--cps-spacing-3) var(--cps-spacing-4);
  border-bottom: solid 1px var(--cps-color-stroke-secondary);
  text-align: left;
  vertical-align: middle;
}
cps-table-view thead th {
  background: var(--cps-table-header-background, var(--cps-app-header, var(--cps-color-background-solid-secondary)));
  font: var(--cps-font-body-strong);
  white-space: nowrap;
}
cps-table-view[density='compact'] :where(th, td) {
  padding: var(--cps-spacing-1-5) var(--cps-spacing-3);
}
cps-table-view[zebra] tbody tr:nth-child(even) > * {
  background: var(--cps-color-background-solid-tertiary);
}
cps-table-view[hoverable] tbody tr:hover > * {
  background: var(--cps-color-fill-subtle-secondary);
}
cps-table-view[sticky-header] thead th {
  position: sticky;
  top: 0;
  z-index: 2;
}
cps-table-view[sticky-column] :where(thead, tbody) tr > :first-child {
  position: sticky;
  left: 0;
  z-index: 1;
  background: var(--cps-color-background-solid-primary);
}
cps-table-view[sticky-column][zebra] tbody tr:nth-child(even) > :first-child {
  background: var(--cps-color-background-solid-tertiary);
}
cps-table-view[sticky-column] thead tr > :first-child {
  z-index: 3;
  background: var(--cps-table-header-background, var(--cps-app-header, var(--cps-color-background-solid-secondary)));
}
`;

function injectLightDomStyles() {
  const id = 'cps-table-view-styles';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = lightDomStyles;
  document.head.appendChild(style);
}

/**
 * @summary Tabelas de dados que **enriquecem um `<table>` nativo** com rolagem contida,
 * cabeçalho/coluna fixos, densidade, zebra e comportamento responsivo — preservando a
 * semântica e a acessibilidade nativas da tabela.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/table-view
 * @status experimental
 * @since 1.5
 *
 * @dependency cps-spinner
 *
 * @slot - A tabela em si: um único elemento `<table>` com `<thead>` e `<tbody>`.
 * @slot toolbar - Conteúdo acima da tabela (título, busca, ações em lote).
 * @slot footer - Conteúdo abaixo da tabela (paginação, contagem de registros).
 * @slot empty - Conteúdo exibido quando a tabela não possui linhas no `<tbody>`.
 *
 * @csspart base - O contêiner externo do componente.
 * @csspart toolbar - A área da barra de ferramentas.
 * @csspart container - A região rolável que envolve a tabela (focável por teclado).
 * @csspart empty - O contêiner do estado vazio.
 * @csspart loading - A camada de carregando.
 * @csspart footer - A área do rodapé.
 *
 * @cssproperty --max-height - Altura máxima da região rolável. Definir um valor ativa a
 *   rolagem vertical interna (útil em conjunto com `sticky-header`).
 * @cssproperty --cps-table-header-background - Cor de fundo do cabeçalho. Por padrão usa
 *   o pastel de acento da casca (`--cps-app-header`) quando disponível.
 */
@customElement('cps-table-view')
export default class CpsTableView extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'toolbar', 'footer', 'empty');
  private resizeObserver?: ResizeObserver;

  @query('.table-view__container') container: HTMLElement;
  @query('slot:not([name])') defaultSlot: HTMLSlotElement;

  @state() private isEmpty = false;

  /**
   * Estratégia de adaptação a larguras estreitas.
   * `scroll` mantém todas as colunas com rolagem horizontal contida no componente;
   * `priority` oculta progressivamente as colunas marcadas com `data-priority` no `<th>`.
   */
  @property({ reflect: true }) responsive: 'scroll' | 'priority' = 'scroll';

  /** Densidade das linhas. */
  @property({ reflect: true }) density: 'comfortable' | 'compact' = 'comfortable';

  /** Mantém o cabeçalho (`<thead>`) fixo ao rolar verticalmente (requer `--max-height`). */
  @property({ type: Boolean, reflect: true, attribute: 'sticky-header' }) stickyHeader = false;

  /** Mantém a primeira coluna fixa ao rolar horizontalmente. */
  @property({ type: Boolean, reflect: true, attribute: 'sticky-column' }) stickyColumn = false;

  /** Aplica faixas zebradas às linhas do corpo. */
  @property({ type: Boolean, reflect: true }) zebra = false;

  /** Realça a linha sob o ponteiro. */
  @property({ type: Boolean, reflect: true }) hoverable = false;

  /** Exibe a camada de carregando sobre a tabela. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Rótulo acessível da região rolável (lido por leitores de tela). */
  @property() label = '';

  /** No modo `priority`, oculta colunas `data-priority="low"` abaixo desta largura (px) do componente. */
  @property({ type: Number, attribute: 'priority-low-below' }) priorityLowBelow = 640;

  /** No modo `priority`, oculta colunas `data-priority="medium"` abaixo desta largura (px) do componente. */
  @property({ type: Number, attribute: 'priority-medium-below' }) priorityMediumBelow = 480;

  connectedCallback() {
    super.connectedCallback();
    injectLightDomStyles();
  }

  firstUpdated() {
    this.resizeObserver = new ResizeObserver(() => this.applyPriority());
    this.resizeObserver.observe(this.container);
    this.refresh();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
  }

  private getTable(): HTMLTableElement | null {
    const assigned = this.defaultSlot?.assignedElements({ flatten: true }) ?? [];
    return (assigned.find(el => el.tagName.toLowerCase() === 'table') as HTMLTableElement) ?? null;
  }

  private handleSlotChange() {
    this.refresh();
  }

  /** Recalcula estado vazio e responsividade (após mudança de conteúdo ou atributos). */
  private refresh() {
    const table = this.getTable();
    this.isEmpty = !!table && table.querySelectorAll('tbody tr').length === 0;
    this.applyPriority();
  }

  @watch('responsive', { waitUntilFirstUpdate: true })
  handleResponsiveChange() {
    this.applyPriority();
  }

  /** Oculta/exibe colunas conforme `data-priority` no cabeçalho e a largura do componente. */
  private applyPriority() {
    const table = this.getTable();
    if (!table) return;

    const headerCells = [...table.querySelectorAll<HTMLTableCellElement>('thead tr:first-of-type > th')];
    const width = this.container?.clientWidth ?? Number.POSITIVE_INFINITY;
    const usePriority = this.responsive === 'priority';
    const hideLow = usePriority && width < this.priorityLowBelow;
    const hideMedium = usePriority && width < this.priorityMediumBelow;

    headerCells.forEach((th, columnIndex) => {
      const priority = th.getAttribute('data-priority');
      if (priority !== 'low' && priority !== 'medium') return;

      const hide = priority === 'low' ? hideLow : hideMedium;
      this.toggleColumn(table, columnIndex, hide);
    });
  }

  private toggleColumn(table: HTMLTableElement, columnIndex: number, hide: boolean) {
    table.querySelectorAll<HTMLTableRowElement>('tr').forEach(row => {
      const cell = row.children[columnIndex] as HTMLElement | undefined;
      cell?.toggleAttribute('hidden', hide);
    });
  }

  render() {
    const hasToolbar = this.hasSlotController.test('toolbar');
    const hasFooter = this.hasSlotController.test('footer');

    return html`
      <div class="table-view" part="base">
        <div
          class=${classMap({
            'table-view__toolbar': true,
            'table-view__toolbar--has-content': hasToolbar
          })}
          part="toolbar"
        >
          <slot name="toolbar"></slot>
        </div>

        <div
          class="table-view__container"
          part="container"
          role="region"
          aria-label=${this.label || 'Tabela'}
          tabindex="0"
        >
          <slot @slotchange=${this.handleSlotChange}></slot>

          ${this.isEmpty
            ? html`<div class="table-view__empty" part="empty">
                <slot name="empty">Nenhum registro encontrado.</slot>
              </div>`
            : ''}
          ${this.loading
            ? html`<div class="table-view__loading" part="loading" aria-live="polite">
                <cps-spinner></cps-spinner>
              </div>`
            : ''}
        </div>

        <div
          class=${classMap({
            'table-view__footer': true,
            'table-view__footer--has-content': hasFooter
          })}
          part="footer"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

export { CpsTableView };

declare global {
  interface HTMLElementTagNameMap {
    'cps-table-view': CpsTableView;
  }
}
