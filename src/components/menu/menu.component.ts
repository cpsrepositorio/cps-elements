import { customElement, query } from 'lit/decorators.js';
import { html } from 'lit';
import BaseElement from '../../internal/base-element.js';
import styles from './menu.styles.js';
import type { CSSResultGroup } from 'lit';
import type CpsMenuItem from '../menu-item.js';

export interface MenuSelectEventDetail {
  item: CpsMenuItem;
}

/**
 * @summary Menus oferecem uma lista de opções para o usuário escolher.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/menu
 * @status stable
 * @since 0.7
 *
 * @slot - Conteúdo do menu, incluindo itens de menu, rótulos de menu e Separadores.
 *
 * @event {{ item: CpsMenuItem }} cps-select - Emitido quando um item de menu interno é selecionado.
 */
@customElement('cps-menu')
export default class CpsMenu extends BaseElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'menu');
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('cps-menu-item');

    if (!item || item.disabled || item.inert) {
      return;
    }

    if (item.type === 'checkbox') {
      item.checked = !item.checked;
    }

    this.emit('cps-select', { detail: { item } });
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Make a selection when pressing enter
    if (event.key === 'Enter') {
      const item = this.getCurrentItem();
      event.preventDefault();

      // Simulate a click to support @click handlers on menu items that also work with the keyboard
      item?.click();
    }

    // Prevent scrolling when space is pressed
    if (event.key === ' ') {
      event.preventDefault();
    }

    // Move the selection when pressing down or up
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      const items = this.getAllItems().filter(item => !item.disabled);

      if (items.length > 1) {
        event.preventDefault();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        let isFocusableItem = false;

        while (!isFocusableItem) {
          if (event.key === 'ArrowDown') {
            index++;
          } else if (event.key === 'ArrowUp') {
            index--;
          } else if (event.key === 'Home') {
            index = 0;
          } else if (event.key === 'End') {
            index = items.length - 1;
          }

          if (index < 0) {
            index = items.length - 1;
          } else if (index > items.length - 1) {
            index = 0;
          }

          if (!items[index].disabled) {
            isFocusableItem = true;
          }
        }

        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }

  private handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.isMenuItem(target)) {
      this.setCurrentItem(target as CpsMenuItem);
    }
  }

  private handleSlotChange() {
    const items = this.getAllItems();

    // Reset the roving tab index when the slotted items change
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }

  private isMenuItem(item: HTMLElement) {
    return (
      item.tagName.toLowerCase() === 'cps-menu-item' ||
      ['menuitem', 'menuitemcheckbox', 'menuitemradio'].includes(item.getAttribute('role') ?? '')
    );
  }

  /** @internal Gets all slotted menu items, ignoring separators, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el: HTMLElement) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    }) as CpsMenuItem[];
  }

  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find(i => i.getAttribute('tabindex') === '0');
  }

  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item: CpsMenuItem) {
    const items = this.getAllItems();

    // Update tab indexes
    items.forEach(i => {
      i.setAttribute('tabindex', i === item && !item.disabled ? '0' : '-1');
    });
  }

  render() {
    return html`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
}

export { CpsMenu };

declare global {
  interface HTMLElementTagNameMap {
    'cps-menu': CpsMenu;
  }
}
