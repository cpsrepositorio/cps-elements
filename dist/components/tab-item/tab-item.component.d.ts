import '../icon-button.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsTabItem extends BaseElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    private readonly attrId;
    private readonly componentId;
    tab: HTMLElement;
    panel: string;
    selected: boolean;
    placement: 'top' | 'bottom' | 'start' | 'end';
    closable: boolean;
    fluid: boolean;
    disabled: boolean;
    connectedCallback(): void;
    private handleCloseClick;
    handleSelectedChange(): void;
    handleDisabledChange(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsTabItem };
declare global {
    interface HTMLElementTagNameMap {
        'cps-tab-item': CpsTabItem;
    }
}
