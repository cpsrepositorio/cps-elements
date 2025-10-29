import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './toggle-button.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Botões alternáveis permitem marcar e desmarcar uma opção, individualmente ou como parte de um grupo.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/toggle-button
 * @status stable
 * @since 0.6
 *
 * @event cps-blur - Emitido quando o botão perde o foco.
 * @event cps-focus - Emitido quando o botão obtém o foco.
 *
 * @slot - O texto interno do botão.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot suffix - Um ícone ou elemento similar após o conteúdo principal.
 *
 * @csspart base - O elemento base que embrulha o botão (um `<div>`).
 * @csspart button - O elemento principal propriamente dito (um `<button>`).
 * @csspart button--checked - Obtém para estilização o elemento `button`, somente quando o este está marcado.
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart content - O elemento que embrulha o conteúdo principal, normalmente o _label_ do botão.
 * @csspart suffix - O elemento que embrulha a renderização do _slot_ `suffix`.
 */
@customElement('cps-toggle-button')
export default class CpsToggleButton extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');

  @query('.button') input: HTMLInputElement;
  @query('.hidden-input') hiddenInput: HTMLInputElement;

  @state() protected hasFocus = false;

  /**
   * Determina o estado de checagem do campo, ou seja, quando presente, o campo encontra-se marcado.
   *
   * Quando utilizado dentro de um `RadioGroup`, o valor do grupo sobrepõe o estado de checagem individual do botão alternável, ou seja, não utilize este atributo quando o botão fizer parte de um _radio group_.
   */
  @property({ type: Boolean, reflect: true }) checked = false;

  /**
   * O valor do campo, submetido em par _name_/_value_ com os dados do formulário.
   *
   * Quando utilizado dentro de um `RadioGroup`, o valor é também utilizado como critério de marcação, mantendo-se o grupo e seus botões em sincronia. Desta forma, o valor deve ser único para cada botão alternável dentro do mesmo grupo.
   */
  @property() value: string;

  /** Desabilita o botão alternável. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * O tamanho do botão alternável.
   *
   * Quando usado dentro de um `RadioGroup`, o tamanho será determinado pelo tamanho do grupo, portanto, tipicamente esse atributo pode ser omitido.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Arredondamento dos cantos do botão alternável, com o padrão sendo bordas arredondas em `4px`. */
  @property({ reflect: true }) rounded: 'default' | 'corner' | 'full' = 'default';

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'presentation');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // If is part of a radio group, we don't want to toggle the button off.
    if (this.classList.contains('cps-button-group__button--radio')) {
      this.checked = true;
    } else {
      this.checked = !this.checked;
    }
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('cps-focus');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  /** Simula um _click_ no botão alternável. */
  click() {
    this.input.click();
  }

  /** Coloca o foco no botão alternável. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Remove o foco do botão alternável. */
  blur() {
    this.input.blur();
  }

  render() {
    return html`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? ' button--checked' : ''}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${classMap({
            button: true,
            'button--default': true,
            'button--small': this.size === 'small',
            'button--medium': this.size === 'medium',
            'button--large': this.size === 'large',
            'button--checked': this.checked,
            'button--disabled': this.disabled,
            'button--focused': this.hasFocus,
            'button--outline': true,
            'button--circle': this.rounded === 'full',
            'button--corner': this.rounded === 'corner',
            'button--has-label': this.hasSlotController.test('[default]'),
            'button--has-prefix': this.hasSlotController.test('prefix'),
            'button--has-suffix': this.hasSlotController.test('suffix')
          })}
          aria-disabled=${this.disabled}
          type="button"
          value=${ifDefined(this.value)}
          tabindex="${this.disabled ? '-1' : '0'}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="content" class="button__content"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
  }
}

export { CpsToggleButton };

declare global {
  interface HTMLElementTagNameMap {
    'cps-toggle-button': CpsToggleButton;
  }
}
