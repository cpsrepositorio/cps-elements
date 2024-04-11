import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import BaseElement from '../internal/base-element.js';
import styles from './background/background.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Componente utilizado para aplicar plano de fundo padrão à página.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/background
 * @status stable
 * @since 0.12
 *
 * @slot - O conteúdo interno do plano de fundo.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart content - O conteúdo interno do plano de fundo.
 * @csspart image - O elemento que renderiza a imagem de fundo.
 *
 * @cssproperty --background-image - Uma imagem de fundo alternativa a ser exibida.
 */
@customElement('cps-background')
export default class CpsBackground extends BaseElement {
  static styles: CSSResultGroup = styles;

  /** O tipo de variação visual do plano de fundo. */
  @property({ type: String }) variant: 'base' | 'acrylic' | 'blurred' = 'base';

  /** Automaticamente centraliza o conteúdo do plano de fundo. */
  @property({ type: Boolean }) centered = false;

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          background: true,
          [`background--${this.variant}`]: true,
          'background--centered': this.centered,
        })}
      >
        <div class="background_effects"></div>
        <slot part="content" class="background__content"></slot>
      </div>
    `;
  }
}

export { CpsBackground };

declare global {
  interface HTMLElementTagNameMap {
    'cps-background': CpsBackground;
  }
}
