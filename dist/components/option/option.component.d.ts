import '../icon.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsOption extends BaseElement {
    static styles: CSSResultGroup;
    private cachedTextLabel;
    current: boolean;
    selected: boolean;
    hasHover: boolean;
    type: 'normal' | 'checkbox';
    value: string;
    disabled: boolean;
    connectedCallback(): void;
    private handleDefaultSlotChange;
    private handleMouseEnter;
    private handleMouseLeave;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleValueChange(): void;
    getTextLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsOption };
declare global {
    interface HTMLElementTagNameMap {
        'cps-option': CpsOption;
    }
}
