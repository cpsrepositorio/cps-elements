import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsSeparator extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    vertical: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsSeparator };
declare global {
    interface HTMLElementTagNameMap {
        'cps-separator': CpsSeparator;
    }
}
