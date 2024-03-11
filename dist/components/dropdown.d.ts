import './flyout.js';
import './icon-button.js';
import './icon.js';
import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
import type CpsFlyout from './flyout.js';
import type CpsOption from './option.js';
export default class CpsDropdown extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private typeToSelectString;
    private typeToSelectTimeout;
    flyout: CpsFlyout;
    field: HTMLSlotElement;
    displaySpan: HTMLSpanElement;
    valueInput: HTMLInputElement;
    menu: HTMLSlotElement;
    private hasFocus;
    private generatedId;
    displayText: string;
    currentOption: CpsOption;
    selectedOptions: CpsOption[];
    id: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    placeholder: string;
    keepPlaceholder: boolean;
    disabled: boolean;
    clearable: boolean;
    open: boolean;
    strategy: 'absolute' | 'fixed';
    placement: 'top' | 'bottom';
    handleIdChange(): void;
    connectedCallback(): void;
    private addOpenListeners;
    private removeOpenListeners;
    private handleFocus;
    private handleBlur;
    private handleDocumentFocusIn;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handleTriggerMouseDown;
    private handleTriggerKeyDown;
    private handleClearClick;
    private handleClearMouseDown;
    private handleOptionClick;
    private handleDefaultSlotChange;
    private getAllLabels;
    private getAllOptions;
    private getFirstOption;
    private setCurrentOption;
    private setSelectedOptions;
    private selectionChanged;
    handleDisabledChange(): void;
    handleValueChange(): void;
    handleOpenChange(): Promise<void>;
    show(): Promise<void>;
    hide(): Promise<void>;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsDropdown };
declare global {
    interface HTMLElementTagNameMap {
        'cps-dropdown': CpsDropdown;
    }
}
