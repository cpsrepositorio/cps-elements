import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsResizeObserver extends BaseElement {
    static styles: CSSResultGroup;
    private resizeObserver;
    private observedElements;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleSlotChange;
    private startObserver;
    private stopObserver;
    handleDisabledChange(): void;
    render(): import("lit").TemplateResult<1>;
}
export { CpsResizeObserver };
declare global {
    interface HTMLElementTagNameMap {
        'cps-resize-observer': CpsResizeObserver;
    }
}
