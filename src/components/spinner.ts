import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../utilities/localize';
import BaseElement from '../internal/base-element';
import styles from './spinner/spinner.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary _Spinners_ são usados para exibir o andamento de uma operação de tempo indeterminado.
 * @documentation https://cpsrepositorio.github.io/cps-elements/components/spinner
 * @status stable
 * @since 0.1
 *
 * @csspart base - O elemento principal propriamente dito (um `<svg>`).
 *
 * @cssproperty --track-width - A espessura da linha de apresentação do indicador.
 * @cssproperty --track-color - A cor da linha de caminho ao fundo do _spinner_.
 * @cssproperty --indicator-color - A cor do indicador giratório do _spinner_.
 * @cssproperty --speed - O tempo que leva para o indicador completa um ciclo de animação giratório.
 */
@customElement('cps-spinner')
export default class CpsSpinner extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  render() {
    return html`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term('loading')}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
}

export { CpsSpinner };

declare global {
  interface HTMLElementTagNameMap {
    'cps-spinner': CpsSpinner;
  }
}
