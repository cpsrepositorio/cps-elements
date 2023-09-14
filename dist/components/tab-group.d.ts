import './icon-button.js';
import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsTabGroup extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private activeTab?;
    private mutationObserver;
    private resizeObserver;
    private tabs;
    private panels;
    tabGroup: HTMLElement;
    body: HTMLSlotElement;
    nav: HTMLElement;
    indicator: HTMLElement;
    private hasScrollControls;
    placement: 'top' | 'bottom' | 'start' | 'end';
    activation: 'auto' | 'manual';
    noScrollControls: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getAllTabs;
    private getAllPanels;
    private getActiveTab;
    private handleClick;
    private handleKeyDown;
    private handleScrollToStart;
    private handleScrollToEnd;
    private setActiveTab;
    private setAriaLabels;
    private repositionIndicator;
    private syncTabsAndPanels;
    updateScrollControls(): void;
    syncIndicator(): void;
    show(panel: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsTabGroup };
declare global {
    interface HTMLElementTagNameMap {
        'cps-tab-group': CpsTabGroup;
    }
}
