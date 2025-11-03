import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsAccordionGroup extends BaseElement {
    static styles: CSSResultGroup;
    private activeAccordion?;
    private accordions;
    multiple: boolean;
    connectedCallback(): void;
    private getAllAccordions;
    private setActiveAccordion;
    private handleClick;
    render(): import("lit").TemplateResult;
}
export { CpsAccordionGroup };
declare global {
    interface HTMLElementTagNameMap {
        'cps-accordion-group': CpsAccordionGroup;
    }
}
