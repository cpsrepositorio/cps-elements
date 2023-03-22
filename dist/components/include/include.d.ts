import BaseElement from '../../internal/base-element';
import type { CSSResultGroup } from 'lit';
export default class CpsInclude extends BaseElement {
    static styles: CSSResultGroup;
    src: string;
    mode: 'cors' | 'no-cors' | 'same-origin';
    allowScripts: boolean;
    private executeScript;
    handleSrcChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cps-include': CpsInclude;
    }
}
