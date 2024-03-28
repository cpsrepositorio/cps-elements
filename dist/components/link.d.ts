import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsLink extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    link: HTMLAnchorElement;
    disabled: boolean;
    href: string;
    size: 'stamp' | 'caption' | 'label' | 'body' | 'body-emphasized' | 'body-strong' | 'body-large' | 'subtitle' | 'title' | 'heading' | 'display';
    target: string;
    private handleClick;
    private handleBlur;
    private handleFocus;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult;
}
export { CpsLink };
declare global {
    interface HTMLElementTagNameMap {
        'cps-link': CpsLink;
    }
}
