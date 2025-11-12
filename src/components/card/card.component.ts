import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit/static-html.js';
import BaseElement from '../../internal/base-element.js';
import styles from './card.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary _Cards_ são utilizados para exibir informações de forma estruturada e destacada.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/card
 * @status stable
 * @since 0.11
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart content - O conteúdo principal do _card_.
 * @csspart header - O cabeçalho (opcional) a ser exibido antes do conteúdo principal do _card_.
 * @csspart footer - O rodapé (opcional) a ser exibido após o conteúdo principal do _card_.
 *
 * @cssproperty --padding - O espaçamento interno do _card_. Padrão: `var(--cps-spacing-6)`.
 * @cssproperty --border-radius - O nível de arredondamento da borda do _card_. Padrão: `var(--cps-border-radius-large)`.
 */
@customElement('cps-card')
export default class CpsCard extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'header', 'footer');

  @query('.card') card: HTMLDivElement;

  /** Opcionalmente sobrescreve a elevação usada para projeção de sombra, mudando a aparência padrão definida pela variante. */
  @property({ reflect: true }) elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = undefined;

  /** Define o padrão de arredondamento dos cantos do _card_. */
  @property({ reflect: true }) rounded:
    | 'none'
    | 'full'
    | 'start'
    | 'end'
    | 'top'
    | 'bottom'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end' = 'full';

  /** O tipo de variação visual do _card_. */
  @property({ reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' | 'on-blurred' = 'primary';

  /**
   * Indica se o _card_ é acionável pelo usuário (podendo ser interagido,
   * por exemplo, com _mouse_ e teclado).
   */
  @property({ type: Boolean, reflect: true }) actionable = false;

  /** Simula um _click_ no elemento. */
  click(event?: MouseEvent) {
    event?.preventDefault();

    if (this.actionable) {
      this.card.click();
    }
  }

  /** Coloca o foco no elemento. */
  focus(options?: FocusOptions) {
    this.card.focus(options);
  }

  /** Remove o foco do elemento. */
  blur() {
    this.card.blur();
  }

  render() {
    const hasContent = this.hasSlotController.test('[default]');
    const hasHeader = this.hasSlotController.test('header');
    const hasFooter = this.hasSlotController.test('footer');

    return html`
      <div
        part="base"
        class=${classMap({
          card: true,

          // Variants
          [`card--${this.variant}`]: true,

          // Rounded
          [`card--rounded-${this.rounded}`]: true,

          // Elevation
          [`card--elevation-${this.elevation}`]: this.elevation !== undefined,

          // Interaction
          'card--actionable': this.actionable,

          // Slots
          'card--has-content': hasContent,
          'card--has-header': hasHeader,
          'card--has-footer': hasFooter
        })}
        tabindex=${this.actionable ? 0 : undefined}
      >
        ${hasHeader ? html`<slot name="header" part="header" class="card__header"></slot>` : ''}
        <slot part="content" class="card__content"></slot>
        ${hasFooter ? html`<slot name="footer" part="footer" class="card__footer"></slot>` : ''}
      </div>
    `;
  }
}

export { CpsCard };

declare global {
  interface HTMLElementTagNameMap {
    'cps-card': CpsCard;
  }
}
