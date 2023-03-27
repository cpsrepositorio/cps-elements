import './icon';
import './spinner';
import BaseElement from '../internal/base-element';
import type { BaseFormControl } from '../internal/base-form-control';
import type { CSSResultGroup } from 'lit';
export default class CpsButton extends BaseElement implements BaseFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    private readonly localize;
    button: HTMLButtonElement | HTMLLinkElement;
    private isFocused;
    invalid: boolean;
    title: string;
    variant: 'default' | 'accent' | 'transparent';
    size: 'small' | 'medium' | 'large';
    caret: boolean;
    disabled: boolean;
    waiting: boolean;
    rounded: 'default' | 'corner' | 'full';
    type: 'button' | 'submit' | 'reset';
    name: string;
    value: string;
    href: string;
    target: '_blank' | '_parent' | '_self' | '_top';
    download?: string;
    form: string;
    formAction: string;
    formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    formMethod: 'post' | 'get';
    formNoValidate: boolean;
    formTarget: '_self' | '_blank' | '_parent' | '_top' | string;
    get validity(): ValidityState;
    get validationMessage(): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private handleBlur;
    private handleFocus;
    private handleClick;
    private handleHostClick;
    private handleInvalid;
    private isButton;
    private isLink;
    handleDisabledChange(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    render(): import("lit-html").TemplateResult<1 | 2>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cps-button': CpsButton;
    }
}
