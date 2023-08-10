import BaseElement from '../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsIcon extends BaseElement {
    static styles: CSSResultGroup;
    private svg;
    name?: string;
    src?: string;
    label: string;
    library: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private getUrl;
    handleLabelChange(): void;
    setIcon(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
export { CpsIcon };
declare global {
    interface HTMLElementTagNameMap {
        'cps-icon': CpsIcon;
    }
}
