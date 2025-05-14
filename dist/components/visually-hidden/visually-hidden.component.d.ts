import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsVisuallyHidden extends BaseElement {
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsVisuallyHidden };
declare global {
    interface HTMLElementTagNameMap {
        'cps-visually-hidden': CpsVisuallyHidden;
    }
}
