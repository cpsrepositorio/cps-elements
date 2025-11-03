import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsBackground extends BaseElement {
    static styles: CSSResultGroup;
    variant: 'base' | 'acrylic' | 'blurred';
    centered: boolean;
    render(): import("lit").TemplateResult;
}
export { CpsBackground };
declare global {
    interface HTMLElementTagNameMap {
        'cps-background': CpsBackground;
    }
}
