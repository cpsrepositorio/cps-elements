import BaseElement from '../../internal/base-element.js';
export default class CpsFormatDate extends BaseElement {
    private readonly localize;
    date: Date | string;
    weekday: 'narrow' | 'short' | 'long';
    era: 'narrow' | 'short' | 'long';
    year: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
    day: 'numeric' | '2-digit';
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    second: 'numeric' | '2-digit';
    timeZoneName: 'short' | 'long';
    timeZone: string;
    hourFormat: 'auto' | '12' | '24';
    render(): import("lit-html").TemplateResult<1> | undefined;
}
export { CpsFormatDate };
declare global {
    interface HTMLElementTagNameMap {
        'cps-format-date': CpsFormatDate;
    }
}
