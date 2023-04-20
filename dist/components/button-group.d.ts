import BaseElement from '../internal/base-element';
import type { CSSResultGroup } from 'lit';
export default class CpsButtonGroup extends BaseElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    disableRole: boolean;
    label: string;
    private handleFocus;
    private handleBlur;
    private handleMouseOver;
    private handleMouseOut;
    private handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsButtonGroup };
declare global {
    interface HTMLElementTagNameMap {
        'cps-button-group': CpsButtonGroup;
    }
}
