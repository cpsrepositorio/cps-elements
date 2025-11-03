import BaseElement from '../../internal/base-element.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';
export default class CpsRating extends BaseElement implements BaseFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    input: HTMLInputElement;
    rating: HTMLElement;
    private hoverValue;
    private isHovering;
    private isFocused;
    private generatedId;
    label: string;
    ariaLabel: string;
    helpText: string;
    name: string;
    value: number;
    defaultValue: number;
    size: 'small' | 'medium' | 'large';
    max: number;
    step: number;
    symbol: 'star' | 'heart';
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    form: string;
    get validity(): ValidityState;
    get validationMessage(): string;
    handleIdChange(): void;
    connectedCallback(): void;
    firstUpdated(): void;
    private handleBlur;
    private handleFocus;
    private handleInvalid;
    private getValueFromMouse;
    private getRoundedValue;
    private handleKeyDown;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleMouseMove;
    private handleClick;
    private handleLabelClick;
    handleValueChange(): Promise<void>;
    handleDisabledChange(): void;
    handleReadonlyChange(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    private renderItems;
    render(): import("lit").TemplateResult<1>;
}
export { CpsRating };
declare global {
    interface HTMLElementTagNameMap {
        'cps-rating': CpsRating;
    }
}
