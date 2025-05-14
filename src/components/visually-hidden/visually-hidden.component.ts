import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import BaseElement from '../../internal/base-element.js';
import styles from './visually-hidden.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary O utilitário visualmente oculto (_visually hidden_) torna seu conteúdo acessível sem exibir na interface.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/visually-hidden
 * @status stable
 * @since 0.18
 *
 * @slot - O conteúdo a ser visualmente oculto.
 */
@customElement('cps-visually-hidden')
export default class CpsVisuallyHidden extends BaseElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

export { CpsVisuallyHidden };

declare global {
  interface HTMLElementTagNameMap {
    'cps-visually-hidden': CpsVisuallyHidden;
  }
}
