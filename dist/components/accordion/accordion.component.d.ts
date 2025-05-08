import '../icon.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsAccordion extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    header: HTMLButtonElement;
    content: HTMLDivElement;
    open: boolean;
    subtitle: string;
    title: string;
    handleOpenChange(wasOpen: boolean | undefined, open: boolean): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult;
}
export { CpsAccordion };
declare global {
    interface HTMLElementTagNameMap {
        'cps-accordion': CpsAccordion;
    }
}
