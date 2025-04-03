import BaseElement from '../../internal/base-element.js';
export default class CpsFormatNumber extends BaseElement {
    private readonly localize;
    value: number;
    type: 'currency' | 'decimal' | 'percent';
    noGrouping: boolean;
    currency: string;
    currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    minimumIntegerDigits: number;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
    minimumSignificantDigits: number;
    maximumSignificantDigits: number;
    render(): string;
}
export { CpsFormatNumber };
declare global {
    interface HTMLElementTagNameMap {
        'cps-format-number': CpsFormatNumber;
    }
}
