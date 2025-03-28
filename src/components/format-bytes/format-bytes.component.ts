import { customElement, property } from 'lit/decorators.js';
import { LocalizeController } from '../../utilities/localize.js';
import BaseElement from '../../internal/base-element.js';

/**
 * @summary Formata um número como um valor em _bytes_ ou _bits_ legível por humanos.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/format-bytes
 * @status stable
 * @since 0.16.0
 */
@customElement('cps-format-bytes')
export default class CpsFormatBytes extends BaseElement {
  private readonly localize = new LocalizeController(this);

  /** O número (valor bruto em _bytes_ ou _bits_) a ser formatado. */
  @property({ type: Number }) value = 0;

  /** O tipo de unidade a ser considerado para as conversões de valores. */
  @property() unit: 'byte' | 'bit' = 'byte';

  /** Determina como formatar o resultado, por exemplo, "100 bytes", "100 b" ou "100b". */
  @property() display: 'long' | 'short' | 'narrow' = 'short';

  private _convertToBytes(value: number, unit: string): number {
    return unit === 'bit' ? value / 8 : value;
  }

  private _formatBytes(bytes: number): { formattedValue: number; formattedUnit: string } {
    const base = 1024;
    let formattedValue = bytes;
    let formattedUnit = 'byte';

    if (bytes < 1) {
      formattedValue = bytes * 8;
      formattedUnit = 'bit';
    } else {
      const prefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
      const index = Math.max(0, Math.min(Math.floor(Math.log(bytes) / Math.log(base)), prefixes.length - 1));
      formattedUnit = prefixes[index] + 'byte';
      formattedValue = parseFloat((bytes / Math.pow(base, index)).toPrecision(3));
    }

    return { formattedValue, formattedUnit };
  }

  render() {
    if (isNaN(this.value)) {
      return '';
    }

    const bytes = this._convertToBytes(this.value, this.unit);
    const { formattedValue, formattedUnit } = this._formatBytes(bytes);

    const localizedValue = this.localize.number(formattedValue, {
      style: 'unit',
      unit: formattedUnit,
      unitDisplay: this.display
    });

    return formattedValue === 1 ? localizedValue.replace(/s$/, '') : localizedValue;
  }
}

export { CpsFormatBytes };

declare global {
  interface HTMLElementTagNameMap {
    'cps-format-bytes': CpsFormatBytes;
  }
}
