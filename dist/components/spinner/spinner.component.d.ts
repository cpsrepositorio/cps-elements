import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsSpinner extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    render(): import("lit").TemplateResult<1>;
}
export { CpsSpinner };
declare global {
    interface HTMLElementTagNameMap {
        'cps-spinner': CpsSpinner;
    }
}
