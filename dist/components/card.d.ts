import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsCard extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    card: HTMLDivElement;
    variant: 'primary' | 'secondary' | 'tertiary' | 'on-blurred';
    actionable: boolean;
    click(event?: MouseEvent): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult;
}
export { CpsCard };
declare global {
    interface HTMLElementTagNameMap {
        'cps-card': CpsCard;
    }
}
