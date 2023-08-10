import './icon.js';
import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsIconButton extends BaseElement {
    static styles: CSSResultGroup;
    button: HTMLButtonElement | HTMLLinkElement;
    private isFocused;
    size: 'small' | 'medium' | 'large';
    label: string;
    name?: string;
    library?: string;
    src?: string;
    href: string;
    target: '_blank' | '_parent' | '_self' | '_top';
    rel: string;
    download?: string;
    disabled: boolean;
    private handleBlur;
    private handleFocus;
    private handleClick;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult;
}
export { CpsIconButton };
declare global {
    interface HTMLElementTagNameMap {
        'cps-icon-button': CpsIconButton;
    }
}
