import BaseElement from '../../internal/base-element.js';
export default class CpsFormatRelativeTime extends BaseElement {
    private readonly localize;
    private updateTimeout;
    private isoTime;
    private relativeTime;
    private titleTime;
    date: Date | string;
    format: 'long' | 'short' | 'narrow';
    numeric: boolean;
    sync: boolean;
    disconnectedCallback(): void;
    render(): "" | import("lit").TemplateResult<1>;
}
export { CpsFormatRelativeTime };
declare global {
    interface HTMLElementTagNameMap {
        'cps-format-relative-time': CpsFormatRelativeTime;
    }
}
