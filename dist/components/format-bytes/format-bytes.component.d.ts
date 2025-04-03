import BaseElement from '../../internal/base-element.js';
export default class CpsFormatBytes extends BaseElement {
    private readonly localize;
    value: number;
    unit: 'byte' | 'bit';
    display: 'long' | 'short' | 'narrow';
    private _convertToBytes;
    private _formatBytes;
    render(): string;
}
export { CpsFormatBytes };
declare global {
    interface HTMLElementTagNameMap {
        'cps-format-bytes': CpsFormatBytes;
    }
}
