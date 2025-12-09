import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsMutationObserver extends BaseElement {
    static styles: CSSResultGroup;
    private mutationObserver;
    attr: string;
    attrOldValue: boolean;
    charData: boolean;
    charDataOldValue: boolean;
    childList: boolean;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleMutation;
    private startObserver;
    private stopObserver;
    handleDisabledChange(): void;
    handleChange(): void;
    render(): import("lit").TemplateResult<1>;
}
export { CpsMutationObserver };
declare global {
    interface HTMLElementTagNameMap {
        'cps-mutation-observer': CpsMutationObserver;
    }
}
