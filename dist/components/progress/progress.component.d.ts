import '../icon.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsProgress extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    value: number | undefined;
    status: 'default' | 'pause' | 'success' | 'error';
    label: string;
    get indeterminate(): boolean;
    set indeterminate(indeterminate: boolean);
    render(): import("lit").TemplateResult<1>;
}
export { CpsProgress };
declare global {
    interface HTMLElementTagNameMap {
        'cps-progress': CpsProgress;
    }
}
