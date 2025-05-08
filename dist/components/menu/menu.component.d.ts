import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
import type CpsMenuItem from '../menu-item.js';
export interface MenuSelectEventDetail {
    item: CpsMenuItem;
}
export default class CpsMenu extends BaseElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    connectedCallback(): void;
    private handleClick;
    private handleKeyDown;
    private handleMouseDown;
    private handleSlotChange;
    private isMenuItem;
    getAllItems(): CpsMenuItem[];
    getCurrentItem(): CpsMenuItem | undefined;
    setCurrentItem(item: CpsMenuItem): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsMenu };
declare global {
    interface HTMLElementTagNameMap {
        'cps-menu': CpsMenu;
    }
}
