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
  @property({ reflect: true }) type:
    | 'cps'
    | 'cps-asscom'
    | 'cps-cgtic'
    | 'cps-sucar'
    | 'elements'
    | 'sp-horizontal'
    | 'sp-vertical' = 'cps';

  /** A variante temática do _logo_. */
  @property({ reflect: true }) variant: 'default' | 'monochromatic' | 'monochromatic-inverted' = 'default';

  render() {
    const classes = classMap({
      logo: true,
      [`logo--${this.type}`]: true,
      [`logo--${this.variant}`]: true
    });

    switch (this.type) {
      case 'cps':
        return html`
          <svg class=${classes} viewBox="0 0 167 108">
            <title>Centro Paula Souza</title>
            ${paths.Cps}
          </svg>
        `;

      case 'cps-asscom':
        return html`
          <svg class=${classes} viewBox="0 0 278 90">
            <title>ASSCOM - Assessoria de Comunicação</title>
            ${paths.CpsAsscom}
          </svg>
        `;

      case 'cps-cgtic':
        return html`
          <svg class=${classes} viewBox="0 0 232 90">
            <title>CGTIC - Coordenadoria Geral de Tecnologia da Informação e Comunicação</title>
            ${paths.CpsCgtic}
          </svg>
        `;

      case 'cps-sucar':
        return html`
          <svg class=${classes} viewBox="0 0 220 90">
            <title>SUCAR - Superintendência de Carreiras</title>
            ${paths.CpsSucar}
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
            ${paths.SpHorizontal}
          </svg>
        `;

      case 'sp-vertical':
        return html`
          <svg class=${classes} viewBox="0 0 461 189">
            <title>São Paulo - Governo do Estado</title>
            ${paths.SpVertical}
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
