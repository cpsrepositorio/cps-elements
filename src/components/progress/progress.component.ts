import '../icon.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { styleMap } from 'lit/directives/style-map.js';
import BaseElement from '../../internal/base-element.js';
import styles from './progress.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Barras de progresso (_progress_) são usadas para mostrar a situação de uma operação em andamento.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/progress
 * @status stable
 * @since 0.19
 *
 * @csspart base - O elemento base do componente.
 * @csspart indicator - O indicador da barra de progresso.
 * @csspart track - A trilha de fundo da barra de progresso.
 *
 * @cssproperty --indicator-height - A altura do indicador.
 * @cssproperty --track-height - A altura da trilha.
 * @cssproperty --indicator-color - A cor do indicador, quando em estado padrão.
 * @cssproperty --indicator-pause-color - A cor do indicador, quando em estado de pausa.
 * @cssproperty --indicator-success-color - A cor do indicador, quando em estado de sucesso.
 * @cssproperty --indicator-error-color - A cor do indicador, quando em estado de erro.
 * @cssproperty --track-color - A cor da trilha.
 */
@customElement('cps-progress')
export default class CpsProgress extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  /** O progresso atual como uma porcentagem, de `0` a `100`. Se não informado, considera-se que a barra de progresso está em estado `indeterminate`. */
  @property({ type: Number, reflect: true }) value: number | undefined;

  /** O estado de progresso, para coloração contextual da barra de progresso. */
  @property({ reflect: true }) status: 'default' | 'pause' | 'success' | 'error' = 'default';

  /** Um rótulo descritivo para a barra de progresso. Este não será exibido na interface, mas será anunciado por dispositivos de acessibilidade durante a interação com o controle, sendo fortemente recomendado. */
  @property() label = '';

  /** Informa se a barra de progresso está em um estado indeterminado, quando não há `value` definido. */
  public get indeterminate(): boolean {
    return this.value === undefined || this.value === null;
  }

  /** É possível setar programaticamente o estado `indeterminate` como `true`, o que causa a remoção do atributo `value`. Não tem efeito como atributo, pois simplesmente não informar o atributo `value` já é suficiente. */
  public set indeterminate(indeterminate: boolean) {
    this.value = indeterminate ? undefined : (this.value ?? 0);
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'progress-bar': true,
          'progress-bar--status-default': this.status === 'default',
          'progress-bar--status-pause': this.status === 'pause',
          'progress-bar--status-success': this.status === 'success',
          'progress-bar--status-error': this.status === 'error',
          'progress-bar--indeterminate': this.indeterminate,
          'progress-bar--rtl': this.localize.dir() === 'rtl'
        })}
        role="progressbar"
        title=${ifDefined(this.title || undefined)}
        aria-label=${this.label?.length ? this.label : this.localize.term('progress')}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${ifDefined(this.value)}
      >
        <div part="track" class="progress-bar__track"></div>
        <div part="indicator" class="progress-bar__indicator" style=${styleMap({ width: `${this.value ?? 50}%` })}></div>
      </div>
    `;
  }
}

export { CpsProgress };

declare global {
  interface HTMLElementTagNameMap {
    'cps-progress': CpsProgress;
  }
}
