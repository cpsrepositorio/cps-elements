import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import BaseElement from '../internal/base-element.js';
import styles from './menu-label/menu-label.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Rótulos de menu são usados para descrever um grupo de itens de menu.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/menu-label
 * @status stable
 * @since 0.7
 *
 * @slot - O texto interno do rótulo de menu.
 *
 * @csspart base - O elemento principal propriamente dito (um `<slot>`).
 */
@customElement('cps-menu-label')
export default class CpsMenuLabel extends BaseElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
}

export { CpsMenuLabel };

declare global {
  interface HTMLElementTagNameMap {
    'cps-menu-label': CpsMenuLabel;
  }
}
