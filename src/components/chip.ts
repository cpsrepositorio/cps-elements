import './icon-button';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../utilities/localize';
import BaseElement from '../internal/base-element';
import styles from './chip/chip.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary _Chips_ são usados como etiquetas para organizar coisas ou para indicar uma seleção.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/tag
 * @status stable
 * @since 0.2
 *
 * @dependency cps-icon-button
 *
 * @slot - O conteúdo do _chip_.
 *
 * @event cps-remove - Emitido quando o botão de remoção do _chip_ `removable` é acionado.
 *
 * @csspart base - O elemento principal propriamente dito (um `<span>`).
 * @csspart content - O `<slot>` de conteúdo interno do _chip_.
 * @csspart remove-button - O botão de remoção do _chip_ (um `<cps-icon-button>`).
 * @csspart remove-button__base - A parte `base` re-exportada do botão de remoção.
 * @csspart remove-button__icon - A parte `icon` re-exportada do botão de remoção.
 */
@customElement('cps-chip')
export default class CpsChip extends BaseElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  /** A variante visual para apresentação do _chip_. */
  @property({ reflect: true }) variant: 'neutral' | 'informative' | 'warning' | 'critical' | 'success' = 'neutral';

  /** O tamanho do _chip_. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Marca o _chip_ como removível, exibindo-se um botão de remoção junto ao conteúdo interno. */
  @property({ type: Boolean }) removable = false;

  private handleRemoveClick() {
    this.emit('cps-remove');
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          chip: true,

          // Types
          'chip--neutral': this.variant === 'neutral',
          'chip--informative': this.variant === 'informative',
          'chip--warning': this.variant === 'warning',
          'chip--critical': this.variant === 'critical',
          'chip--success': this.variant === 'success',

          // Sizes
          'chip--small': this.size === 'small',
          'chip--medium': this.size === 'medium',
          'chip--large': this.size === 'large',

          // Modifiers
          'chip--removable': this.removable
        })}
      >
        <slot part="content" class="chip__content"></slot>

        ${this.removable
          ? html`
              <cps-icon-button
                part="remove-button"
                exportparts="base:remove-button__base, icon:remove-button__icon"
                name="dismiss"
                library="system"
                label=${this.localize.term('remove')}
                class="chip__remove"
                @click=${this.handleRemoveClick}
                size="small"
              ></cps-icon-button>
            `
          : ''}
      </span>
    `;
  }
}

export { CpsChip };

declare global {
  interface HTMLElementTagNameMap {
    'cps-chip': CpsChip;
  }
}
