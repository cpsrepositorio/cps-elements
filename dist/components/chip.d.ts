import './icon-button.js';
import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsChip extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    variant: 'neutral' | 'informative' | 'warning' | 'critical' | 'success';
    size: 'small' | 'medium' | 'large';
    removable: boolean;
    private handleRemoveClick;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsChip };
declare global {
    interface HTMLElementTagNameMap {
        'cps-chip': CpsChip;
    }
}
