import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsCard extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    card: HTMLDivElement;
    elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    rounded: 'none' | 'full' | 'start' | 'end' | 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    variant: 'primary' | 'secondary' | 'tertiary' | 'on-blurred';
    actionable: boolean;
    click(event?: MouseEvent): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit").TemplateResult;
}
export { CpsCard };
declare global {
    interface HTMLElementTagNameMap {
        'cps-card': CpsCard;
    }
}
