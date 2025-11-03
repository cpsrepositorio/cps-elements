import '../icon.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsMenuItem extends BaseElement {
    static styles: CSSResultGroup;
    private cachedTextLabel;
    defaultSlot: HTMLSlotElement;
    menuItem: HTMLElement;
    type: 'normal' | 'checkbox';
    checked: boolean;
    value: string;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleHostClick;
    private handleDefaultSlotChange;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    handleTypeChange(): void;
    getTextLabel(): string;
    render(): import("lit").TemplateResult<1>;
}
export { CpsMenuItem };
declare global {
    interface HTMLElementTagNameMap {
        'cps-menu-item': CpsMenuItem;
    }
}
