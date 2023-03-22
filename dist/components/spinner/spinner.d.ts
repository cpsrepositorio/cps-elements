import BaseElement from '../../internal/base-element';
import type { CSSResultGroup } from 'lit';
export default class CpsSpinner extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cps-spinner': CpsSpinner;
    }
}
