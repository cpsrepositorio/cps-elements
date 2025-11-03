import '../icon-button.js';
import '../tooltip.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsDialog extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    private modal;
    private originalTrigger;
    dialog: HTMLElement;
    panel: HTMLElement;
    backdrop: HTMLElement;
    open: boolean;
    closable: boolean;
    label: string;
    ariaLabel: string;
    returnValue: string | boolean | undefined;
    connectedCallback(): void;
    firstUpdated(): void;
    private setupFooterButtons;
    private handleFooterButtonClick;
    disconnectedCallback(): void;
    private handleDocumentKeyDown;
    private playAnimation;
    private requestClose;
    private addOpenListeners;
    private removeOpenListeners;
    private handleFormSubmission;
    handleOpenChange(): Promise<void>;
    show(): Promise<void>;
    close(returnValue?: string | boolean): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
export declare function showAlert(message: string, title?: string, button?: string): Promise<void>;
export declare function showConfirm(message: string, title?: string, buttonYes?: string, buttonNo?: string): Promise<boolean>;
export { CpsDialog };
declare global {
    interface HTMLElementTagNameMap {
        'cps-dialog': CpsDialog;
    }
}
