import BaseElement from '../internal/base-element';
import type { CSSResultGroup } from 'lit';
export default class CpsLabel extends BaseElement {
    static styles: CSSResultGroup;
    variant: 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'brand-primary' | 'brand-secondary' | 'brand-tertiary' | 'inverted-primary' | 'inverted-secondary' | 'inverted-disabled';
    size: 'stamp' | 'caption' | 'label' | 'body' | 'body-emphasized' | 'body-strong' | 'body-large' | 'subtitle' | 'title' | 'heading' | 'display';
    tag: 'span' | 'small' | 'i' | 'b' | 'em' | 'strong' | 'label' | 'p' | 'div';
    render(): import("lit-html").TemplateResult<1 | 2>;
}
export { CpsLabel };
declare global {
    interface HTMLElementTagNameMap {
        'cps-label': CpsLabel;
    }
}
