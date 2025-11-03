import '../icon-button.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsDrawer extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    private modal;
    private originalTrigger;
    drawer: HTMLElement;
    panel: HTMLElement;
    backdrop: HTMLElement;
    open: boolean;
    closable: boolean;
    label: string;
    ariaLabel: string;
    placement: 'top' | 'end' | 'bottom' | 'start';
    contained: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private playAnimation;
    private requestClose;
    private addOpenListeners;
    private removeOpenListeners;
    private handleDocumentKeyDown;
    handleOpenChange(): Promise<void>;
    show(): Promise<void>;
    close(): Promise<void>;
    render(): import("lit").TemplateResult<1>;
}
export { CpsDrawer };
declare global {
    interface HTMLElementTagNameMap {
        'cps-drawer': CpsDrawer;
    }
}
