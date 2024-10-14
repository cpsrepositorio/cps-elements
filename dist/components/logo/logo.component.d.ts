import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsLogo extends BaseElement {
    static styles: CSSResultGroup;
    type: 'area-di' | 'cps' | 'elements' | 'sp-horizontal' | 'sp-vertical';
    variant: 'default' | 'monochromatic' | 'monochromatic-inverted';
    render(): import("lit-html").TemplateResult | null;
}
export { CpsLogo };
declare global {
    interface HTMLElementTagNameMap {
        'cps-logo': CpsLogo;
    }
}
