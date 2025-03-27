import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import BaseElement from '../../internal/base-element.js';
import paths from './paths/index.js';
import styles from './logo.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Logotipos (_logos_) representam tipografia e símbolos gráficos que identificam uma marca.
 * No contexto desta biblioteca, simplificam a inserção de alguns dos _logos_ comuns no ecossistema de aplicações internas do CPS.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/logo
 * @status stable
 * @since 0.15.0
 */
@customElement('cps-logo')
export default class CpsLogo extends BaseElement {
  static styles: CSSResultGroup = styles;

  /** O tipo de _logo_ a ser renderizado. */
  @property({ reflect: true }) type: 'area-di' | 'cps' | 'elements' | 'sp-horizontal' | 'sp-vertical' = 'cps';

  /** A variante temática do _logo_. */
  @property({ reflect: true }) variant: 'default' | 'monochromatic' | 'monochromatic-inverted' = 'default';

  render() {
    const classes = classMap({
      logo: true,
      [`logo--${this.type}`]: true,
      [`logo--${this.variant}`]: true
    });

    switch (this.type) {
      case 'area-di':
        return html`
          <svg class=${classes} viewBox="0 0 87 108">
            <title>DI - Divisão de Informática</title>
            ${paths.AreaDI}
          </svg>
        `;

      case 'cps':
        return html`
          <svg class=${classes} viewBox="0 0 167 108">
            <title>Centro Paula Souza</title>
            ${paths.CPS}
          </svg>
        `;

      case 'elements':
        return html`
          <svg class=${classes} viewBox="0 0 282 134">
            <title>CPS Elements</title>
            ${paths.Elements}
          </svg>
        `;

      case 'sp-horizontal':
        return html`
          <svg class=${classes} viewBox="0 0 714 128">
            <title>São Paulo - Governo do Estado</title>
            ${paths.SPHorizontal}
          </svg>
        `;

      case 'sp-vertical':
        return html`
          <svg class=${classes} viewBox="0 0 461 189">
            <title>São Paulo - Governo do Estado</title>
            ${paths.SPVertical}
          </svg>
        `;

      default:
        return null;
    }
  }
}

export { CpsLogo };

declare global {
  interface HTMLElementTagNameMap {
    'cps-logo': CpsLogo;
  }
}
