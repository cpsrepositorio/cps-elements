import '../icon.js';
import '../tooltip.js';
import BaseElement from '../../internal/base-element.js';
import type { CSSResultGroup } from 'lit';
export default class CpsAvatar extends BaseElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private hasError;
    private generatedInitials;
    private generatedBackground;
    src: string;
    srcset: string;
    label: string;
    initials: 'auto' | string;
    loading: 'eager' | 'lazy';
    shape: 'circle' | 'square' | 'rounded';
    color: 'auto' | 'none' | string;
    noTooltip: boolean;
    size: 'inherit' | 'stamp' | 'caption' | 'label' | 'body' | 'body-emphasized' | 'body-strong' | 'body-large' | 'subtitle' | 'title' | 'heading' | 'display';
    handleSrcChange(): void;
    handleImageError(): void;
    handleLabelChange(): void;
    handleRangeChanges(): void;
    private updateInitials;
    private updateBackground;
    private getHash;
    private normalizeHash;
    render(): import("lit").TemplateResult<1>;
}
export { CpsAvatar };
declare global {
    interface HTMLElementTagNameMap {
        'cps-avatar': CpsAvatar;
    }
}
