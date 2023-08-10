import './button-group.js';
import { FormControlController } from '../internal/form.js';
import BaseElement from '../internal/base-element.js';
import type { BaseFormControl } from '../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';
export default class CpsRadioGroup extends BaseElement implements BaseFormControl {
    static styles: CSSResultGroup;
    protected readonly formControlController: FormControlController;
    private readonly hasSlotController;
    private customValidityMessage;
    private validationTimeout;
    defaultSlot: HTMLSlotElement;
    validationInput: HTMLInputElement;
    private hasButtonGroup;
    private errorMessage;
    private generatedId;
    defaultValue: string;
    id: string;
    label: string;
    helpText: string;
    name: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    form: string;
    required: boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    handleIdChange(): void;
    connectedCallback(): void;
    firstUpdated(): void;
    private getAllRadios;
    private handleRadioClick;
    private handleKeyDown;
    private handleLabelClick;
    private handleInvalid;
    private adjustFocusableRadios;
    private syncRadios;
    private updateCheckedRadio;
    handleSizeChange(): void;
    handleValueChange(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message?: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsRadioGroup };
declare global {
    interface HTMLElementTagNameMap {
        'cps-radio-group': CpsRadioGroup;
    }
}
