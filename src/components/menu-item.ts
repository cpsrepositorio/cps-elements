import './icon.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getTextContent } from '../internal/slot.js';
import { html } from 'lit';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './menu-item/menu-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Itens de menu fornecem opções para o usuário escolher em um menu.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/menu-item
 * @status stable
 * @since 0.7
 *
 * @dependency cps-icon
 *
 * @slot - O texto interno do item de menu.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot suffix - Um ícone ou elemento similar após o conteúdo principal.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart check - O elemento que embrulha o ícone de checagem (caso o item de menu seja do tipo `checkbox`), visível apenas quando o item de menu está marcado.
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart label - O elemento que embrulha o conteúdo principal, normalmente um texto literal.
 * @csspart suffix - O elemento que embrulha a renderização do _slot_ `suffix`.
 */
@customElement('cps-menu-item')
export default class CpsMenuItem extends BaseElement {
  static styles: CSSResultGroup = styles;

  private cachedTextLabel: string;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.menu-item') menuItem: HTMLElement;

  /** O tipo de item de menu a ser renderizado. Para usar o estado `checked`, o valor deste atributo deve ter sido definido como `checkbox`. */
  @property() type: 'normal' | 'checkbox' = 'normal';

  /** Determina se o _checkbox_ do item de menu está selecionado (aplicável somente se o atributo `type` for `checked`). */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** Um valor único para identificar o item de menu, podendo programaticamente auxiliar na determinação de quando cada item de menu é selecionado, através do evento `cps-select` do `<cps-menu>` pai deste item. */
  @property() value = '';

  /** Desabilita o item de menu. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener('click', this.handleHostClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
  }

  private handleHostClick(event: MouseEvent) {
    // Prevent the click event from being emitted when the menu item is disabled
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  private handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    // When the label changes, emit a slotchange event so parent controls see it
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit('slotchange', { bubbles: true, composed: false, cancelable: false });
    }
  }

  @watch('checked')
  handleCheckedChange() {
    // For proper accessibility, users have to use type="checkbox" to use the checked attribute
    if (this.checked && this.type !== 'checkbox') {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }

    // Only checkbox types can receive the aria-checked attribute
    if (this.type === 'checkbox') {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    } else {
      this.removeAttribute('aria-checked');
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('type')
  handleTypeChange() {
    if (this.type === 'checkbox') {
      this.setAttribute('role', 'menuitemcheckbox');
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    } else {
      this.setAttribute('role', 'menuitem');
      this.removeAttribute('aria-checked');
    }
  }

  /** Obtém o texto literal a partir do conteúdo do _slot_ padrão do item de menu. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'menu-item': true,
          'menu-item--checkable': this.type === 'checkbox',
          'menu-item--checked': this.checked,
          'menu-item--disabled': this.disabled
        })}
      >
        <span part="check" class="menu-item__check">
          <cps-icon name="checkmark" library="system" aria-hidden="true"></cps-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>
      </div>
    `;
  }
}

export { CpsMenuItem };

declare global {
  interface HTMLElementTagNameMap {
    'cps-menu-item': CpsMenuItem;
  }
}
