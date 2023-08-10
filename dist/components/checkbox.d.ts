import './icon.js';
import BaseElement from '../internal/base-element.js';
import type { BaseFormControl } from '../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';
export default class CpsCheckbox extends BaseElement implements BaseFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    input: HTMLInputElement;
    private hasFocus;
    private generatedId;
    title: string;
    id: string;
    name: string;
    value: string;
    label: string;
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    checked: boolean;
    indeterminate: boolean;
    defaultChecked: boolean;
    form: string;
    required: boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    handleIdChange(): void;
    firstUpdated(): void;
    private handleClick;
    private handleBlur;
    private handleInput;
    private handleInvalid;
    private handleFocus;
    handleDisabledChange(): void;
    handleStateChange(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsCheckbox };
declare global {
    interface HTMLElementTagNameMap {
        'cps-checkbox': CpsCheckbox;
    }
}
