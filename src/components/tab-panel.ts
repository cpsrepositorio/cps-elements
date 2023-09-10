import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './tab-panel/tab-panel.styles.js';
import type { CSSResultGroup } from 'lit';

let id = 0;

/**
 * @summary Painéis de abas (_tab panels_) são usados dentro de [grupos de abas](/componentes/tab-group) para exibir conteúdo em abas.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/tab-panel
 * @status stable
 * @since 0.9
 *
 * @slot - O conteúdo do painel.
 *
 * @csspart base - O elemento principal propriamente dito (um `<slot>`).
 *
 * @cssproperty --padding - O espaçamento interno do painel. Padrão: `var(--cps-spacing-4)`.
 * @cssproperty --background - A cor de fundo do painel. Padrão: `var(--cps-color-background-solid-tertiary)`.
 * @cssproperty --border-color - A cor da borda do painel. Padrão: `var(--cps-color-stroke-primary)`.
 * @cssproperty --border-radius - O arredondamento da borda do painel. Padrão: `var(--cps-border-radius-large)`.
 */
@customElement('cps-tab-panel')
export default class CpsTabPanel extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly attrId = ++id;
  private readonly componentId = `cps-tab-panel-${this.attrId}`;

  /** O nome do painel, deve ser único dentro de um mesmo grupo de abas. */
  @property({ reflect: true }) name = '';

  /** Quando verdadeiro, o painel é exibido. */
  @property({ type: Boolean, reflect: true }) selected = false;

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute('role', 'tabpanel');
  }

  @watch('selected')
  handleSelectedChanged() {
    this.setAttribute('aria-hidden', this.selected ? 'false' : 'true');
  }

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'tab-panel': true,
          'tab-panel--selected': this.selected
        })}
      ></slot>
    `;
  }
}

export { CpsTabPanel };

declare global {
  interface HTMLElementTagNameMap {
    'cps-tab-panel': CpsTabPanel;
  }
}
