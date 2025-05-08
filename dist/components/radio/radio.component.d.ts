import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsRadio extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    protected hasFocus: boolean;
    private generatedId;
    title: string;
    id: string;
    value: string;
    name: string;
    label: string;
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    checked: boolean;
    handleIdChange(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addEventListeners;
    private removeEventListeners;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private setInitialAttributes;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsRadio };
declare global {
    interface HTMLElementTagNameMap {
        'cps-radio': CpsRadio;
    }
}
