import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsLogo extends BaseElement {
    static styles: CSSResultGroup;
    type: 'cps' | 'cps-asscom' | 'cps-cgtic' | 'cps-sucar' | 'elements' | 'sp-horizontal' | 'sp-vertical';
    variant: 'default' | 'monochromatic' | 'monochromatic-inverted';
    render(): import("lit").TemplateResult | null;
}
export { CpsLogo };
declare global {
    interface HTMLElementTagNameMap {
        'cps-logo': CpsLogo;
    }
}
