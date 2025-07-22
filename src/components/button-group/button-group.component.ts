import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import BaseElement from '../../internal/base-element.js';
import styles from './button-group.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Grupos de botões podem ser usados para agrupar botões relacionados em seções.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/button-group
 * @status stable
 * @since 0.1
 *
 * @slot - Um ou mais elementos `<cps-button>` a exibir dentro do grupo de botões.
 *
 * @csspart base - O elemento base que embrulha o grupo.
 */
@customElement('cps-button-group')
export default class CpsButtonGroup extends BaseElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  @state() disableRole = false;

  /**
   * Um rótulo descritivo para o grupo de botões. Este não será exibido na interface, mas será anunciado
   * por dispositivos de acessibilidade durante a interação com o controle, sendo fortemente recomendado.
   */
  @property() label = '';

  private handleFocus(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('cps-button-group__button--focus');
  }

  private handleBlur(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('cps-button-group__button--focus');
  }

  private handleMouseOver(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('cps-button-group__button--hover');
  }

  private handleMouseOut(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('cps-button-group__button--hover');
  }

  private handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })] as HTMLElement[];

    slottedElements.forEach(el => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);

      if (button !== null) {
        button.classList.add('cps-button-group__button');
        button.classList.toggle('cps-button-group__button--first', index === 0);
        button.classList.toggle('cps-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
        button.classList.toggle('cps-button-group__button--last', index === slottedElements.length - 1);
      }
    });
  }

  render() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole ? 'presentation' : 'group'}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
  }
}

function findButton(el: HTMLElement) {
  const selector = 'cps-button, cps-dropdown, cps-toggle-button';

  // The button could be the target element or a child of it (e.g. a dropdown or tooltip anchor)
  return el.closest(selector) ?? el.querySelector(selector);
}

export { CpsButtonGroup };

declare global {
  interface HTMLElementTagNameMap {
    'cps-button-group': CpsButtonGroup;
  }
}
