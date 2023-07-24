import { arrow, autoUpdate, computePosition, flip, offset, platform, shift, size } from '@floating-ui/dom';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { offsetParent } from 'composed-offset-position';
import BaseElement from '../internal/base-element.js';
import styles from './popover/popover.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary _Popover_ é um utilitário que permite ancorar caixas flutuantes declarativamente a outro elemento.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/popover
 * @status stable
 * @since 0.5
 *
 * @event cps-reposition - Emitido quando o _popover_ é reposicionado.
 * Este evento pode disparar numerosas vezes, evite colocar operações custosas em seu _listener_,
 * ou alternativamente considere usar uma estratégia de _debouce_ neste evento.
 *
 * @slot - O conteúdo do _popover_.
 * @slot anchor - O elemento que o _popover_ será ancorado.
 * Se o elemento estiver fora da estrutura hierárquica do _popover_, use o _slot_ `anchor` em vez disso.
 *
 * @csspart arrow - A seta do _popover_, caso seja em estilo balão.
 * Evite definir propriedades `top|bottom|left|right`, já que estes valores são atribuídos automaticamente conforme o )_popover_ se move. Esta parte CSS é mais relevante para aplicar cores que combinam com seu _popover_ personalizado, ou talvez bordas ou sombras diferenciadas.
 * @csspart container - O elemento base do _popover_ (um element `<div>`). Esta parte CSS é útil para definir aparência personalizada ao corpo do _popover_, como cor de fundo, sombras, etc.
 *
 * @cssproperty [--arrow-size=7px] - Tamanho da seta. Observe que independentemente desta variável, a seta não será exibida a menos que o atributo `arrow` seja utilizado.
 * @cssproperty [--background-color=rgb(var(--cps-color-neutral-500))] - A cor de fundo do _popover_ e de sua eventual seta (caso esteja sendo exibido em estilo balão).
 * @cssproperty [--border-color=transparent] - A bordar externa contornando o _popover_ e sua eventual seta (caso esteja sendo exibido em estilo balão).
 * @cssproperty [--auto-size-available-width] - Uma variável somente leitura que determina a largura máxima que o _popover_ pode ter antes de transbordar. Útil para posicionar elementos filhos que precisam se ajustar junto. Esta propriedade está disponível somente quando o atributo `auto-size` é utilizado.
 * @cssproperty [--auto-size-available-height] - Uma variável somente leitura que determina a altura máxima que o _popover_ pode ter antes de transbordar. Útil para posicionar elementos filhos que precisam se ajustar junto. Esta propriedade está disponível somente quando o atributo `auto-size` é utilizado.
 */
@customElement('cps-popover')
export default class CpsPopover extends BaseElement {
  static styles: CSSResultGroup = styles;

  private anchorEl: Element | null;
  private cleanup: ReturnType<typeof autoUpdate> | undefined;

  /** A referência ao elemento _popover_ interno. Útil para animar e estilizar o popover com JavaScript. */
  @query('.popover') container: HTMLElement;
  @query('.popup__arrow') private arrowElement: HTMLElement;

  /**
   * O elemento que o _popover_ será ancorado.
   * Se o elemento estiver fora da estrutura hierárquica do _popover_,
   * você pode fornecer o `id` deste elemento ou mesmo uma instância direta dele, atribuindo a esta propriedade.
   * Caso contrário, se a âncora pode ser contida junto ao _popover_, use o _slot_ `anchor` em vez disso.
   */
  @property() anchor: Element | string;

  /**
   * Ativa a lógica de posicionamento e mostra o _popover_.
   * Quando este atributo é removido, a lógica de posicionamento é desativada e o _popover_ será ocultado.
   */
  @property({ type: Boolean, reflect: true }) active = false;

  /**
   * O posicionamento preferido do _popover_ em relação à âncora.
   * Observe que o posicionamento real poderá variar conforme configurado para manter o painel dentro da janela de visualização.
   */
  @property({ reflect: true }) placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'top';

  /**
   * Determinar como o _popover_ é posicionado.
   * A estratégia `absolute` funciona bem na maioria dos casos, mas se rolagem externa causar o corte do _popover_, usar uma estratégia de posição `fixed` pode contorná-lo.
   */
  @property({ reflect: true }) strategy: 'absolute' | 'fixed' = 'absolute';

  /**
   * A distância em pixels do _popover_ em relação à sua âncora, para afastá-lo ou aproximá-lo da âncora.
   * Por exemplo, se `placement` for `top` ou `bottom`, `distance` definirá a distância do _popover_ no eixo vertical.
   */
  @property({ type: Number }) distance = 0;

  /**
   * A distância em pixels do _popover_ no eixo de deslocamento de sua âncora.
   * Por exemplo, se `placement` for `top` ou `bottom`, `skidding` definirá a distância do _popover_ no eixo horizontal.
   */
  @property({ type: Number }) skidding = 0;

  /**
   * Anexa uma seta ao _popover_, para que apresente um estilo balão.
   * O tamanho e a cor da seta podem ser personalizados usando as variáveis CSS `--arrow-size` e `--arrow-color`.
   * Para personalizações adicionais, você também pode selecionar a seta para estilização
   * usando `::part(arrow)` em sua folha de estilos.
   */
  @property({ type: Boolean }) arrow = false;

  /**
   * O posicionamento da seta.
   * O padrão é `anchor`, que alinhará a seta o mais próximo possível do centro da âncora,
   * considerando o espaço disponível e o `arrow-padding`.
   * Um valor de `start`, `end` ou `center` alinhará a seta ao início, ao fim ou ao centro do _popover_.
   */
  @property({ attribute: 'arrow-placement' }) arrowPlacement: 'start' | 'end' | 'center' | 'anchor' = 'anchor';

  /**
   * A quantidade de espaço entre a seta e as bordas do _popover_.
   * Se o _popover_ tiver um `border-radius`, por exemplo,
   * isso evitará que a seta ultrapasse o início do arredondamento.
   */
  @property({ attribute: 'arrow-padding', type: Number }) arrowPadding = 10;

  /**
   * Quando definido, o _popover_ será girado automaticamente para caber no espaço disponível.
   * Você pode usar `flipFallbackPlacements` para configurar ainda mais como o posicionamento alternativo é determinado.
   */
  @property({ type: Boolean }) flip = false;

  /**
   * Se o posicionamento preferido não atender, o _popover_ será testado nestes posicionamentos alternativos,
   * até que um atenda. Deve ser uma `String` de qualquer número de posicionamentos separados por um espaço,
   * por exemplo, `"top bottom left"`. Se nenhum posicionamento atender,
   * a estratégia de posicionamento alternativo será usada em vez disso.
   * */
  @property({
    attribute: 'flip-fallback-placements',
    converter: {
      fromAttribute: (value: string) => {
        return value
          .split(' ')
          .map(p => p.trim())
          .filter(p => p !== '');
      },
      toAttribute: (value: []) => {
        return value.join(' ');
      }
    }
  })
  flipFallbackPlacements = '';

  /**
   * Quando nem o posicionamento preferido nem os posicionamentos alternativos se encaixam,
   * este valor será usado para determinar se o _popover_ deve ser posicionado usando o
   * melhor ajuste disponível com base no espaço disponível ou
   * como foi inicialmente definido por seu `placement`.
   */
  @property({ attribute: 'flip-fallback-strategy' }) flipFallbackStrategy: 'best-fit' | 'initial' = 'best-fit';

  /**
   * A fronteira de giro descreve o(s) elemento(s) de colisão que serão verificados em casos de cortes,
   * quando o _popover_ precisar girar para se acomodar. Por padrão, a fronteira inclui ancestrais com rolagem
   * que fariam com que o elemento fosse cortado. Se necessário, você pode alterar a fronteira passando uma
   * referência à instância de um ou mais elementos nesta propriedade.
   */
  @property({ type: Object }) flipBoundary: Element | Element[];

  /** A quantidade de espaço, em pixels, a ser excedido antes que o comportamento de giro ocorra. */
  @property({ attribute: 'flip-padding', type: Number }) flipPadding = 0;

  /**
   * Permite reposicionar o _popover_ ao longo do seu eixo atual, para mantê-lo à vista quando cortado.
   * Por exemplo, um `placement` de `top` farão que o _popover_ esteja posicionado com seu eixo na horizontal.
   * Se a posição do _popover_ neste eixo transpassar possíveis áreas de corte,
   * ele se moverá para a esquerda ou para a direita, conforme necessário.
   */
  @property({ type: Boolean }) shift = false;

  /**
   * A fronteira de reposicionamento descreve o(s) elemento(s) de colisão que serão verificados em casos de cortes,
   * quando o _popover_ precisar ser reposicionado no seu eixo para se acomodar.
   * Por padrão, a fronteira inclui ancestrais com rolagem que fariam com que o elemento fosse cortado.
   * Se necessário, você pode alterar a fronteira passando uma referência à instância de
   * um ou mais elementos nesta propriedade.
   */
  @property({ type: Object }) shiftBoundary: Element | Element[];

  /** A quantidade de espaço, em pixels, a ser excedido antes que o reposicionamento no eixo ocorra. */
  @property({ attribute: 'shift-padding', type: Number }) shiftPadding = 0;

  /**
   * Quando definido, permite que o _popover_ automaticamente se redimensione
   * para prevenir seu transbordamento ou potenciais cortes por causa de ancestrais com rolagem.
   */
  @property({ attribute: 'auto-size' }) autoSize: 'horizontal' | 'vertical' | 'both';

  /** Sincroniza a largura ou altura (ou ambos) do _popover_ com a do seu elemento âncora. */
  @property() sync: 'width' | 'height' | 'both';

  /**
   * A fronteira de auto-dimensionamento descreve o(s) elemento(s) de colisão que serão verificados
   * em casos de cortes, quando o _popover_ precisar ser redimensionado para se acomodar.
   * Por padrão, a fronteira inclui ancestrais com rolagem que fariam com que o elemento fosse cortado.
   * Se necessário, você pode alterar a fronteira passando uma referência à instância de
   * um ou mais elementos nesta propriedade.
   */
  @property({ type: Object }) autoSizeBoundary: Element | Element[];

  /** A quantidade de espaço, em pixels, a ser excedido antes que o auto-dimensionamento ocorra. */
  @property({ attribute: 'auto-size-padding', type: Number }) autoSizePadding = 0;

  async connectedCallback() {
    super.connectedCallback();

    // Start the positioner after the first update
    await this.updateComplete;
    this.start();
  }

  disconnectedCallback() {
    this.stop();
  }

  async updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);

    // Start or stop the positioner when active changes
    if (changedProps.has('active')) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }

    // Update the anchor when anchor changes
    if (changedProps.has('anchor')) {
      this.handleAnchorChange();
    }

    // All other properties will trigger a reposition when active
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }

  private async handleAnchorChange() {
    await this.stop();

    if (this.anchor && typeof this.anchor === 'string') {
      // Locate the anchor by id
      const root = this.getRootNode() as Document | ShadowRoot;
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof Element) {
      // Use the anchor's reference
      this.anchorEl = this.anchor;
    } else {
      // Look for a slotted anchor
      this.anchorEl = this.querySelector<HTMLElement>('[slot="anchor"]');
    }

    // If the anchor is a <slot>, we'll use the first assigned element as the target since slots use `display: contents`
    // and positioning can't be calculated on them
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0] as HTMLElement;
    }

    if (!this.anchorEl) {
      throw new Error(
        'Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.'
      );
    }

    this.start();
  }

  private start() {
    // We can't start the positioner without an anchor
    if (!this.anchorEl) {
      return;
    }

    this.cleanup = autoUpdate(this.anchorEl, this.container, () => {
      this.reposition();
    });
  }

  private async stop(): Promise<void> {
    return new Promise(resolve => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = undefined;
        this.removeAttribute('data-current-placement');
        this.style.removeProperty('--auto-size-available-width');
        this.style.removeProperty('--auto-size-available-height');
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }

  /** Força o _popover_ a se recalcular e se reposicionar. */
  reposition() {
    // Nothing to do if the popover is inactive or the anchor doesn't exist
    if (!this.active || !this.anchorEl) {
      return;
    }

    //
    // NOTE: Floating UI middlewares are order dependent: https://floating-ui.com/docs/middleware
    //
    const middleware = [
      // The offset middleware goes first
      offset({ mainAxis: this.distance, crossAxis: this.skidding })
    ];

    // First we sync width/height
    if (this.sync) {
      middleware.push(
        size({
          apply: ({ rects }) => {
            const syncWidth = this.sync === 'width' || this.sync === 'both';
            const syncHeight = this.sync === 'height' || this.sync === 'both';
            this.container.style.width = syncWidth ? `${rects.reference.width}px` : '';
            this.container.style.height = syncHeight ? `${rects.reference.height}px` : '';
          }
        })
      );
    } else {
      // Cleanup styles if we're not matching width/height
      this.container.style.width = '';
      this.container.style.height = '';
    }

    // Then we flip
    if (this.flip) {
      middleware.push(
        flip({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === 'best-fit' ? 'bestFit' : 'initialPlacement',
          padding: this.flipPadding
        })
      );
    }

    // Then we shift
    if (this.shift) {
      middleware.push(
        shift({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }

    // Now we adjust the size as needed
    if (this.autoSize) {
      middleware.push(
        size({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === 'vertical' || this.autoSize === 'both') {
              this.style.setProperty('--auto-size-available-height', `${availableHeight}px`);
            } else {
              this.style.removeProperty('--auto-size-available-height');
            }

            if (this.autoSize === 'horizontal' || this.autoSize === 'both') {
              this.style.setProperty('--auto-size-available-width', `${availableWidth}px`);
            } else {
              this.style.removeProperty('--auto-size-available-width');
            }
          }
        })
      );
    } else {
      // Cleanup styles if we're no longer using auto-size
      this.style.removeProperty('--auto-size-available-width');
      this.style.removeProperty('--auto-size-available-height');
    }

    // Finally, we add an arrow
    if (this.arrow) {
      middleware.push(
        arrow({
          element: this.arrowElement,
          padding: this.arrowPadding
        })
      );
    }

    // Use custom positioning logic if the strategy is absolute. Otherwise, fall back to the default logic.
    const getOffsetParent =
      this.strategy === 'absolute'
        ? (element: Element) => platform.getOffsetParent(element, offsetParent)
        : platform.getOffsetParent;

    computePosition(this.anchorEl, this.container, {
      placement: this.placement,
      middleware,
      strategy: this.strategy,
      platform: {
        ...platform,
        getOffsetParent
      }
    }).then(({ x, y, middlewareData, placement }) => {
      /* Even though we have our own localization utility, it uses different heuristics to determine RTL.
       * Because of that, we'll use the same approach that Floating UI uses.
       * Source: https://github.com/floating-ui/floating-ui/blob/cb3b6ab07f95275730d3e6e46c702f8d4908b55c/packages/dom/src/utils/getDocumentRect.ts#L31
       */
      const isRtl = getComputedStyle(this).direction === 'rtl';
      const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[placement.split('-')[0]]!;

      this.setAttribute('data-current-placement', placement);

      Object.assign(this.container.style, {
        left: `${x}px`,
        top: `${y}px`
      });

      if (this.arrow) {
        const arrowX = middlewareData.arrow!.x;
        const arrowY = middlewareData.arrow!.y;
        let top = '';
        let right = '';
        let bottom = '';
        let left = '';

        if (this.arrowPlacement === 'start') {
          // Start
          const value = typeof arrowX === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
          top = typeof arrowY === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
          right = isRtl ? value : '';
          left = isRtl ? '' : value;
        } else if (this.arrowPlacement === 'end') {
          // End
          const value = typeof arrowX === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
          right = isRtl ? '' : value;
          left = isRtl ? value : '';
          bottom = typeof arrowY === 'number' ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : '';
        } else if (this.arrowPlacement === 'center') {
          // Center
          left =
            typeof arrowX === 'number'
              ? `calc(50% - var(--arrow-size) * 0.75${['left', 'right'].includes(staticSide) ? ' + 1px' : ''})`
              : '';
          top =
            typeof arrowY === 'number'
              ? `calc(50% - var(--arrow-size) * 0.75${['left', 'right'].includes(staticSide) ? ' + 1px' : ''})`
              : '';
        } else {
          // Anchor (default)
          left = typeof arrowX === 'number' ? `${arrowX}px` : '';
          top = typeof arrowY === 'number' ? `${arrowY}px` : '';
        }

        const transform = {
          top: 'rotate(180deg)',
          bottom: 'rotate(0deg)',
          left: 'rotate(90deg)',
          right: 'rotate(-90deg)'
        }[staticSide];

        const staticSideValue = `calc(var(--arrow-size) * -1${['left', 'right'].includes(staticSide) ? ' - 1px' : ''})`;

        Object.assign(this.arrowElement.style, {
          top,
          right,
          bottom,
          left,
          transform,
          [staticSide]: staticSideValue
        });
      }
    });

    this.emit('cps-reposition');
  }

  render() {
    return html`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="container"
        class=${classMap({
          popover: true,
          'popover--active': this.active,
          'popover--fixed': this.strategy === 'fixed',
          'popover--has-arrow': this.arrow
        })}
      >
        <slot></slot>
        ${this.arrow ? html`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ''}
      </div>
    `;
  }
}

export { CpsPopover };

declare global {
  interface HTMLElementTagNameMap {
    'cps-popover': CpsPopover;
  }
}
