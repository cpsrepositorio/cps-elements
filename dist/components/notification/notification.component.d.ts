import '../icon-button.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsNotification extends BaseElement {
    static styles: CSSResultGroup;
    private autoHideTimeout;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    open: boolean;
    closable: boolean;
    variant: 'neutral' | 'informative' | 'warning' | 'critical' | 'success';
    icon: boolean;
    duration: number;
    firstUpdated(): void;
    private restartAutoHide;
    private handleCloseClick;
    private handleMouseMove;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    toast(): Promise<void>;
    private hasIcon;
    render(): import("lit").TemplateResult<1>;
}
interface ToastOptions {
    variant?: CpsNotification['variant'];
    duration?: number;
    closable?: boolean;
    icon?: boolean | string;
}
export declare const toast: (message: string, options?: ToastOptions) => Promise<void>;
export { CpsNotification };
declare global {
    interface HTMLElementTagNameMap {
        'cps-notification': CpsNotification;
    }
}
