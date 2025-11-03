import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsToggleButton extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    input: HTMLInputElement;
    hiddenInput: HTMLInputElement;
    protected hasFocus: boolean;
    checked: boolean;
    value: string;
    disabled: boolean;
    size: 'small' | 'medium' | 'large';
    rounded: 'default' | 'corner' | 'full';
    connectedCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    handleDisabledChange(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
export { CpsToggleButton };
declare global {
    interface HTMLElementTagNameMap {
        'cps-toggle-button': CpsToggleButton;
    }
}
