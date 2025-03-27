import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize.js';
import BaseElement from '../../internal/base-element.js';

/**
 * @summary Formata um número usando o idioma e as opções especificadas.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/format-number
 * @status stable
 * @since 0.16.0
 */
@customElement('cps-format-number')
export default class CpsFormatNumber extends BaseElement {
  private readonly localize = new LocalizeController(this);

  /** O número a ser formatado. */
  @property({ type: Number }) value = 0;

  /** O estilo de formatação a ser utilizado. */
  @property() type: 'currency' | 'decimal' | 'percent' = 'decimal';

  /** Desativa os separadores de agrupamento. */
  @property({ attribute: 'no-grouping', type: Boolean }) noGrouping = false;

  /** O código de moeda [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) a ser utilizado na formatação. */
  @property() currency = 'USD';

  /** Definição sobre como exibir a moeda. */
  @property({ attribute: 'currency-display' }) currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name' = 'symbol';

  /** O número mínimo de dígitos inteiros a ser utilizado. Valores possíveis são 1-21. */
  @property({ attribute: 'minimum-integer-digits', type: Number }) minimumIntegerDigits: number;

  /** O número mínimo de dígitos fracionários a ser utilizado. Valores possíveis de 0 a 100. */
  @property({ attribute: 'minimum-fraction-digits', type: Number }) minimumFractionDigits: number;

  /** O número máximo de dígitos fracionários a ser utilizado. Valores possíveis de 0 a 100. */
  @property({ attribute: 'maximum-fraction-digits', type: Number }) maximumFractionDigits: number;

  /** O número mínimo de dígitos significativos a ser utilizado. Valores possíveis de 1 a 21. */
  @property({ attribute: 'minimum-significant-digits', type: Number }) minimumSignificantDigits: number;

  /** O número máximo de dígitos significativos a ser utilizado. Valores possíveis de 1 a 21. */
  @property({ attribute: 'maximum-significant-digits', type: Number }) maximumSignificantDigits: number;

  render() {
    if (isNaN(this.value)) {
      return '';
    }

    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
}

export { CpsFormatNumber };

declare global {
  interface HTMLElementTagNameMap {
    'cps-format-number': CpsFormatNumber;
  }
}
