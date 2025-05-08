import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import BaseElement from '../../internal/base-element.js';
import styles from './accordion-group.styles.js';
import type { CSSResultGroup } from 'lit';
import type CpsAccordion from '../accordion/accordion.component.js';

/**
 * @summary Grupos de _accordions_ permitem automatizar expansão/contração exclusiva de múltiplos [_accordions_](/componentes/accordion).
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/accordion-group
 * @status stable
 * @since 0.14
 *
 * @slot - O conteúdo do grupo, necessariamente um ou mais de `<cps-accordion>`.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 *
 * @cssproperty --gap - O espaçamento entre _accordions_ dentro do grupo. Padrão: `var(--cps-spacing-3)`.
 */
@customElement('cps-accordion-group')
export default class CpsAccordionGroup extends BaseElement {
  static styles: CSSResultGroup = styles;

  private activeAccordion?: CpsAccordion;
  private accordions: CpsAccordion[] = [];

  /** Permite que múltiplos _accordions_ sejam abertos simultaneamente. */
  @property({ reflect: true, type: Boolean }) multiple = false;

  connectedCallback() {
    super.connectedCallback();

    this.updateComplete.then(() => {
      this.accordions = this.getAllAccordions();
    });
  }

  private getAllAccordions() {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot')!;

    return [...(slot.assignedElements() as CpsAccordion[])].filter(el => {
      return el.tagName.toLowerCase() === 'cps-accordion';
    });
  }

  /*
  private getActiveAccordion() {
    return this.accordions.find(el => el.open);
  }
  */

  private setActiveAccordion(accordion: CpsAccordion) {
    if (accordion !== this.activeAccordion) {
      this.activeAccordion = accordion;
      this.accordions.forEach(el => (el.open = el === this.activeAccordion));
    }
  }

  private handleClick(event: MouseEvent) {
    // Nothing to do if multiple accordions are allowed to be open
    if (this.multiple) {
      return;
    }

    const target = event.target as HTMLElement;
    const accordion = target.closest('cps-accordion');
    const accordionGroup = accordion?.closest('cps-accordion-group');

    // Ensure the target accordion is in this accordion group
    if (accordionGroup !== this) {
      return;
    }

    if (accordion !== null) {
      this.setActiveAccordion(accordion);
    }
  }

  render() {
    return html`
      <div
        class=${classMap({
          'accordion-group': true
        })}
        part="base"
        @click=${this.handleClick}
      >
        <slot></slot>
      </div>
    `;
  }
}

export { CpsAccordionGroup };

declare global {
  interface HTMLElementTagNameMap {
    'cps-accordion-group': CpsAccordionGroup;
  }
}
