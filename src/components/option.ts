import './icon.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './option/option.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Opções definem os itens selecionáveis dentro de controles de formulário, como no [Select](/componentes/select).
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/option
 * @status stable
 * @since 0.8
 *
 * @dependency cps-icon
 *
 * @slot - O texto interno da opção.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot suffix - Um ícone ou elemento similar após o conteúdo principal.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart check - O elemento que embrulha o ícone de checagem (caso a opção esteja dentro de uma caixa de seleção múltipla), visível apenas quando a opção está marcada.
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart label - O elemento que embrulha o conteúdo principal, normalmente um texto literal.
 * @csspart suffix - O elemento que embrulha a renderização do _slot_ `suffix`.
 */
@customElement('cps-option')
export default class CpsOption extends BaseElement {
  static styles: CSSResultGroup = styles;

  private cachedTextLabel: string;

  // When true, option is currently highlighted, but hasn't been selected it yet.
  @state() current = false;

  // When true, option is currently selected, and has `aria-selected="true"`.
  @state() selected = false;

  // When true, option is currently hovered. Important since Safari doesn't honor `:hover` styles while dragging.
  @state() hasHover = false;

  // O tipo de opção a ser renderizada.
  // Usado internamente quando `<cps-select>` é `multiple`.
  @state() type: 'normal' | 'checkbox' = 'normal';

  /**
   * Um valor único para identificar a opção. Quando é selecionada, o controle de formulário contendo a opção receberá este valor. O valor deve ser único dentre outras opções no mesmo controle. Os valores não podem conter espaços, pois espaços são usados como separadores em controles com seleção múltipla.
   */
  @property({ reflect: true }) value = '';

  /** Desabilita a opção. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', this.type === 'checkbox' ? 'menuitemcheckbox' : 'option');
    this.setAttribute('aria-selected', 'false');
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

  private handleMouseEnter() {
    this.hasHover = true;
  }

  private handleMouseLeave() {
    this.hasHover = false;
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('selected')
  handleSelectedChange() {
    if (this.type === 'checkbox') {
      this.setAttribute('aria-checked', this.selected ? 'true' : 'false');
    }

    this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
  }

  @watch('value')
  handleValueChange() {
    // Ensure the value is a string. This ensures the next line doesn't error and allows framework users to pass numbers
    // instead of requiring them to cast the value to a string.
    if (typeof this.value !== 'string') {
      this.value = String(this.value);
    }

    if (this.value.includes(' ')) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, '_');
    }
  }

  /** Obtém o texto literal a partir do conteúdo do _slot_ padrão da opção. */
  getTextLabel() {
    return (this.textContent ?? '').trim();
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          option: true,
          'option--current': this.current,
          'option--disabled': this.disabled,
          'option--checkable': this.type === 'checkbox',
          'option--selected': this.selected,
          'option--hover': this.hasHover
        })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <span part="check" class="option__check">
          <cps-icon part="checked-icon" class="option__checked" library="system" name="checkmark"></cps-icon>
          <cps-icon part="unchecked-icon" class="option__unchecked" library="system" name="unchecked"></cps-icon>
        </span>

        <slot name="prefix" part="prefix" class="option__prefix"></slot>

        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
}

export { CpsOption };

declare global {
  interface HTMLElementTagNameMap {
    'cps-option': CpsOption;
  }
}
