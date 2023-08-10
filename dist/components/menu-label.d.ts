import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsMenuLabel extends BaseElement {
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsMenuLabel };
declare global {
    interface HTMLElementTagNameMap {
        'cps-menu-label': CpsMenuLabel;
    }
}
