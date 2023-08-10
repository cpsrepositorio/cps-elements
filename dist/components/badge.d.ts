import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsBadge extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    variant: 'neutral' | 'informative' | 'warning' | 'critical' | 'success';
    icon: boolean;
    square: boolean;
    pulse: boolean;
    private hasSingleCharacter;
    private hasIcon;
    render(): import("lit-html").TemplateResult;
}
export { CpsBadge };
declare global {
    interface HTMLElementTagNameMap {
        'cps-badge': CpsBadge;
    }
}
