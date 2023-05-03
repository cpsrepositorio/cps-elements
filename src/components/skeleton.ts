import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import BaseElement from '../internal/base-element';
import styles from './skeleton/skeleton.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Indicador usado para apresentação visual de conteúdo que potencialmente ainda será exibido.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/skeleton
 * @status stable
 * @since 0.2
 *
 * @csspart base - O elemento principal que sustenta o indicador (um `<div>`).
 * @csspart indicator - O elemento que representa o indicador em si, o qual recebe cor e animação.
 *
 * @cssproperty --color - A cor base do indicador.
 * @cssproperty --accent-color - A cor de destaque (ou brilho) a ser usada como efeito de carregamento.
 */
@customElement('cps-skeleton')
export default class CpsSkeleton extends BaseElement {
  static styles: CSSResultGroup = styles;

  /** Determina o efeito visual de carregamento do indicador. */
  @property() effect: 'sheen' | 'pulse' | 'none' = 'sheen';

  /** Arredondamento dos cantos, com o padrão sendo bordas arredondas em `4px`. */
  @property({ reflect: true }) rounded: 'default' | 'corner' | 'full' | 'none' = 'default';

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          skeleton: true,
          'skeleton--rounded': this.rounded === 'default',
          'skeleton--rounded-corner': this.rounded === 'corner',
          'skeleton--rounded-full': this.rounded === 'full',
          'skeleton--pulse': this.effect === 'pulse',
          'skeleton--sheen': this.effect === 'sheen'
        })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
}

export { CpsSkeleton };

declare global {
  interface HTMLElementTagNameMap {
    'cps-skeleton': CpsSkeleton;
  }
}
