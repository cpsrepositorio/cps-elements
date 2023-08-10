import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from 'src/internal/slot.js';
import { html } from 'lit';
import BaseElement from '../internal/base-element.js';
import styles from './separator/separator.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Separadores são usados para dividir ou agrupar elementos visualmente.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/separator
 * @status stable
 * @since 0.7
 *
 * @slot - O conteúdo interno do separador, recomendado um texto literal ou um `<cps-icon>`.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 *
 * @cssproperty --color - A cor do separador.
 * @cssproperty --thickness - A espessura do separador.
 * @cssproperty --spacing - O espaçamento do separador em relação aos elementos à sua volta.
 */
@customElement('cps-separator')
export default class CpsSeparator extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]');

  /** Desenha o separador em uma orientação vertical, ao invés do padrão horizontal. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          separator: true,
          'separator--vertical': this.vertical,
          'separator--horizontal': !this.vertical,
          'separator--has-content': this.hasSlotController.test('[default]')
        })}
        role="separator"
        aria-orientation=${this.vertical ? 'vertical' : 'horizontal'}
      >
        <slot></slot>
      </div>
    `;
  }
}

export { CpsSeparator };

declare global {
  interface HTMLElementTagNameMap {
    'cps-separator': CpsSeparator;
  }
}
