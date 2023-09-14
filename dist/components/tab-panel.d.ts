import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsTabPanel extends BaseElement {
    static styles: CSSResultGroup;
    private readonly attrId;
    private readonly componentId;
    name: string;
    selected: boolean;
    connectedCallback(): void;
    handleSelectedChanged(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsTabPanel };
declare global {
    interface HTMLElementTagNameMap {
        'cps-tab-panel': CpsTabPanel;
    }
}
