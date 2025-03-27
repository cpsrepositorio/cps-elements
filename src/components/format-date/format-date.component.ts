import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import BaseElement from '../../internal/base-element.js';

/**
 * @summary Formata uma data/hora usando o idioma e as opções especificadas.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/format-date
 * @status stable
 * @since 0.16.0
 */
@customElement('cps-format-date')
export default class CpsFormatDate extends BaseElement {
  private readonly localize = new LocalizeController(this);

  /**
   * A data/hora a ser formatada. Se não for definida, a data e hora atuais serão usadas.
   * Ao passar um texto, é altamente recomendado usar o formato ISO 8601 para garantir
   * que os fusos horários sejam tratados corretamente. Para converter uma data para este
   * formato em JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   */
  @property() date: Date | string = new Date();

  /** O formato para exibir o dia da semana. */
  @property() weekday: 'narrow' | 'short' | 'long';

  /** O formato para exibir a era. */
  @property() era: 'narrow' | 'short' | 'long';

  /** O formato para exibir o ano. */
  @property() year: 'numeric' | '2-digit';

  /** O formato para exibir o mês. */
  @property() month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';

  /** O formato para exibir o dia. */
  @property() day: 'numeric' | '2-digit';

  /** O formato para exibir a hora. */
  @property() hour: 'numeric' | '2-digit';

  /** O formato para exibir os minutos. */
  @property() minute: 'numeric' | '2-digit';

  /** O formato para exibir os segundos. */
  @property() second: 'numeric' | '2-digit';

  /** O formato para exibir o nome do fuso horário. */
  @property({ attribute: 'time-zone-name' }) timeZoneName: 'short' | 'long';

  /** O fuso horário no qual o horário será expresso. */
  @property({ attribute: 'time-zone' }) timeZone: string;

  /** O formato para exibir a hora. */
  @property({ attribute: 'hour-format' }) hourFormat: 'auto' | '12' | '24' = 'auto';

  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === 'auto' ? undefined : this.hourFormat === '12';

    if (isNaN(date.getMilliseconds())) {
      return undefined;
    }

    return html`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
          weekday: this.weekday,
          era: this.era,
          year: this.year,
          month: this.month,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          second: this.second,
          timeZoneName: this.timeZoneName,
          timeZone: this.timeZone,
          hour12: hour12
        })}
      </time>
    `;
  }
}

export { CpsFormatDate };

declare global {
  interface HTMLElementTagNameMap {
    'cps-format-date': CpsFormatDate;
  }
}
