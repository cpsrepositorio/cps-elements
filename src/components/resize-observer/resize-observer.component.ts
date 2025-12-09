import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './resize-observer.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary O utilitário observador de redimensionamento (_resize observer_) oferece uma alternativa com sintaxe declarativa para a API nativa [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/resize-observer
 * @status stable
 * @since 0.25.0
 *
 * @event {{ entries: ResizeObserverEntry[] }} cps-resize - Emitido quando um elemento é redimensionado.
 *
 * @slot - Um ou mais elementos para observar redimensionamentos.
 */
@customElement('cps-resize-observer')
export default class CpsResizeObserver extends BaseElement {
  static styles: CSSResultGroup = styles;

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];

  /** Desativa o observador. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      this.emit('cps-resize', { detail: { entries } });
    });

    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }

  private handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }

  private startObserver() {
    const slot = this.shadowRoot!.querySelector('slot');

    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true }) as HTMLElement[];

      // Unwatch previous elements
      this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
      this.observedElements = [];

      // Watch new elements
      elements.forEach(el => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }

  private stopObserver() {
    this.resizeObserver.disconnect();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
}

export { CpsResizeObserver };

declare global {
  interface HTMLElementTagNameMap {
    'cps-resize-observer': CpsResizeObserver;
  }
}
