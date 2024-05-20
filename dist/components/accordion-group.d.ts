import type { CSSResultGroup } from 'lit';
import BaseElement from '../internal/base-element.js';
export default class CpsAccordionGroup extends BaseElement {
    static styles: CSSResultGroup;
    private activeAccordion?;
    private accordions;
    multiple: boolean;
    connectedCallback(): void;
    private getAllAccordions;
    private setActiveAccordion;
    private handleClick;
    render(): import("lit-html").TemplateResult;
}
export { CpsAccordionGroup };
declare global {
    interface HTMLElementTagNameMap {
        'cps-accordion-group': CpsAccordionGroup;
    }
}
