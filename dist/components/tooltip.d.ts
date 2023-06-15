import './popover';
import BaseElement from '../internal/base-element';
import type { CSSResultGroup } from 'lit';
import type CpsPopover from './popover';
export default class CpsTooltip extends BaseElement {
    static styles: CSSResultGroup;
    private hoverTimeout;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    body: HTMLElement;
    popover: CpsPopover;
    content: string;
    placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    distance: number;
    skidding: number;
    open: boolean;
    trigger: string;
    hoist: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private handleKeyDown;
    private handleMouseOver;
    private handleMouseOut;
    private hasTrigger;
    handleOpenChange(): Promise<void>;
    handleOptionsChange(): Promise<void>;
    handleDisabledChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsTooltip };
declare global {
    interface HTMLElementTagNameMap {
        'cps-tooltip': CpsTooltip;
    }
}
