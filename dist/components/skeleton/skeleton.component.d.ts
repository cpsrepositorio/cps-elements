import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsSkeleton extends BaseElement {
    static styles: CSSResultGroup;
    effect: 'sheen' | 'pulse' | 'none';
    rounded: 'default' | 'corner' | 'full' | 'none';
    render(): import("lit").TemplateResult<1>;
}
export { CpsSkeleton };
declare global {
    interface HTMLElementTagNameMap {
        'cps-skeleton': CpsSkeleton;
    }
}
