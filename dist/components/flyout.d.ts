import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export interface VirtualElement {
    getBoundingClientRect: () => DOMRect;
}
export default class CpsFlyout extends BaseElement {
    static styles: CSSResultGroup;
    private anchorElement;
    private cleanup;
    container: HTMLElement;
    private arrowElement;
    anchor: Element | string | VirtualElement;
    active: boolean;
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    strategy: 'absolute' | 'fixed';
    distance: number;
    skidding: number;
    arrow: boolean;
    arrowPlacement: 'start' | 'end' | 'center' | 'anchor';
    arrowPadding: number;
    flip: boolean;
    flipFallbackPlacements: string;
    flipFallbackStrategy: 'best-fit' | 'initial';
    flipBoundary: Element | Element[];
    flipPadding: number;
    shift: boolean;
    shiftBoundary: Element | Element[];
    shiftPadding: number;
    autoSize: 'horizontal' | 'vertical' | 'both';
    sync: 'width' | 'height' | 'both';
    autoSizeBoundary: Element | Element[];
    autoSizePadding: number;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    updated(changedProps: Map<string, unknown>): Promise<void>;
    private handleAnchorChange;
    private start;
    private stop;
    reposition(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsFlyout };
declare global {
    interface HTMLElementTagNameMap {
        'cps-flyout': CpsFlyout;
    }
}
