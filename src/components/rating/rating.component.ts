import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { uuid } from '../../internal/uuid.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './rating.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Campos de classificação (_rating_) permitem aos usuários classificar um conteúdo.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/rating
 * @status stable
 * @since 0.22.0
 *
 * @slot label - Rótulo informativo do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 * @slot help-text - Texto de apoio para auxílio ao preenchimento do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `help-text`.
 *
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada.
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @csspart form-control - O agrupamento de controle de formulário que engloba todos os elementos, como rótulo, caixa de entrada, e texto de apoio.
 * @csspart form-control-label - Elemento que embrulha o rótulo do controle de formulário.
 * @csspart form-control-input - Elemento que embrulha o campo do controle de formulário.
 * @csspart form-control-help-text - Elemento que embrulha o texto de apoio do controle de formulário.
 * @csspart base - O elemento principal que envolve os símbolos de classificação.
 * @csspart symbol - O contêiner base envolvendo cada símbolo de classificação renderizado.
 * @csspart symbol--active - Aplicado a um símbolo quando ele está ativo (selecionado), ainda que parcialmente.
 *
 * @cssproperty --symbol-color - Cor do símbolo quando não está ativo. Por padrão, `var(--cps-color-text-secondary)`.
 * @cssproperty --symbol-color-active - Cor do símbolo quando está ativo. Por padrão, `var(--cps-color-fill-accent)`.
 */
@customElement('cps-rating')
export default class CpsRating extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    value: (control: CpsRating) => (control.value > 0 ? control.value.toString() : undefined),
    defaultValue: (control: CpsRating) => control.defaultValue,
    setValue: (control: CpsRating, value: number) => (control.value = value)
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');

  @query('.rating__control') input: HTMLInputElement;
  @query('.rating') rating: HTMLElement;

  @state() private hoverValue = 0;
  @state() private isHovering = false;
  @state() private isFocused = false;
  @state() private generatedId = '';

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O rótulo de acessibilidade para a classificação. Necessário apenas se um `label` visual não for fornecido. */
  @property({ attribute: 'aria-label' }) ariaLabel: string;

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text` em vez disso. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** O nome do campo, submetido em par _name_/_value_ com os dados do formulário. */
  @property() name = '';

  /** O valor do campo, submetido em par _name_/_value_ com os dados do formulário. */
  @property({ type: Number }) value = 0;

  /** O valor padrão do controle de formulário. Usado principalmente para redefinir o campo. */
  @defaultValue() defaultValue = 0;

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** O valor máximo da classificação, por padrão `5`. Deve ser no mínimo `1`. */
  @property({
    type: Number,
    hasChanged: (newValue, oldValue) => {
      if (typeof newValue !== 'number' || isNaN(newValue) || newValue < 1 || newValue > 10) {
        console.error('CpsRating Error: Max must be a number between 1 and 10.');
        return false;
      }

      return newValue !== oldValue;
    }
  })
  max = 5;

  /** A precisão para a qual arredondar. Para permitir meias estrelas, defina como `0.5`. */
  @property({ type: Number }) precision = 1;

  /** O símbolo usado para representar cada unidade de classificação. */
  @property({ reflect: true }) symbol: 'star' | 'heart' = 'star';

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Torna o campo somente leitura. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Torna o campo como sendo de preenchimento obrigatório. */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * O formulário "dono" deste controle de formulário. Se não informado, o formulário mais próximo na hierarquia
   * até este elemento será utilizado. Se informado, o valor deve ser um `id` único de um formulário
   * existente no documento.
   */
  @property({ reflect: true }) form = '';

  /** Obtém o objeto de estado de validade do campo. */
  get validity() {
    return this.input.validity;
  }

  /** Obtém a mensagem de validação do campo. */
  get validationMessage() {
    return this.input.validationMessage;
  }

  @watch('id')
  handleIdChange() {
    this.generatedId = this.id ? this.id : uuid();
  }

  connectedCallback() {
    super.connectedCallback();
    this.generatedId = this.id ? this.id : uuid();
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleBlur() {
    this.isFocused = false;
    this.emit('cps-blur');
  }

  private handleFocus() {
    this.isFocused = true;
    this.emit('cps-focus');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private getValueFromMouse(event: MouseEvent) {
    const { left, width } = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const value = ((event.clientX - left) / width) * this.max;
    return Math.min(this.max, Math.max(0, value));
  }

  private getRoundedValue(value: number) {
    return Math.round(value / this.precision) * this.precision;
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (this.readonly || this.disabled) return;

    if (/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      const num = Number(event.key);

      if (num >= 0 && num <= this.max) {
        this.value = num;
        this.emit('cps-change');
      }
      return;
    }

    if (['Backspace', 'Delete', 'Home'].includes(event.key)) {
      event.preventDefault();
      this.value = 0;
      this.emit('cps-change');
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      this.value = this.max;
      this.emit('cps-change');
      return;
    }

    if (['ArrowLeft', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      const decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      this.emit('cps-change');
    } else if (['ArrowRight', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      const increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      this.emit('cps-change');
    }
  }

  private handleMouseEnter() {
    if (this.readonly || this.disabled) return;
    this.isHovering = true;
  }

  private handleMouseLeave() {
    if (this.readonly) return;
    this.isHovering = false;
    this.hoverValue = 0;
  }

  private handleMouseMove(event: MouseEvent) {
    if (this.readonly || this.disabled) return;
    this.hoverValue = this.getValueFromMouse(event);
  }

  private handleClick(event: MouseEvent) {
    if (this.readonly || this.disabled) return;
    const newValue = this.getRoundedValue(this.getValueFromMouse(event));
    this.value = newValue;
    this.emit('cps-change');
  }

  private handleLabelClick = (event: MouseEvent) => {
    event.preventDefault();
    this.focus();
  };

  @watch('value')
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.emit('cps-change');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }

  @watch('readonly', { waitUntilFirstUpdate: true })
  handleReadonlyChange() {
    this.formControlController.setValidity(this.readonly);
  }

  /** Verifica a validade em um formulário, sem exibir uma mensagem de validação. Retorna `true` quando válido, e `false` quando inválido. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Obtém o formulário associado com este componente, se algum estiver. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Verifica a validade em um formulário, e exibe as mensagem de validação do navegador caso o resultado seja inválido. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Define uma mensagem de validação personalizada. Passar uma `string` vazia como argumento restaura a validade do elemento. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Coloca o foco no campo. */
  focus(options?: FocusOptions) {
    if (this.rating) {
      this.rating.focus(options);
    }
  }

  /** Remove o foco do campo. */
  blur() {
    if (this.rating) {
      this.rating.blur();
    }
  }

  private renderItems() {
    const displayValue = this.isHovering ? this.getRoundedValue(this.hoverValue) : this.value;

    return Array.from({ length: this.max }).map((_, i) => {
      const remainder = displayValue - i;
      const isActive = remainder > 0;
      const isFull = remainder >= 1;
      const clip = isFull ? 0 : isActive ? (1 - remainder) * 100 : 100;

      return html`
        <span
          part="symbol ${isActive ? 'symbol--active' : ''}"
          class=${classMap({
            rating__symbol: true,
            'rating__symbol--half': isActive && !isFull,
            'rating__symbol--full': isFull
          })}
          role="presentation"
        >
          ${this.symbol === 'star'
            ? html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  class="empty"
                  fill="currentColor"
                  d="M7.045 2.205a1.067 1.067 0 0 1 1.914 0l1.481 3.003 3.315.48a1.067 1.067 0 0 1 .59 1.82l-2.4 2.338.568 3.302a1.067 1.067 0 0 1-1.546 1.125L8 12.713l-2.965 1.56a1.067 1.067 0 0 1-1.547-1.125l.565-3.302-2.4-2.337a1.067 1.067 0 0 1 .594-1.82l3.314-.48 1.484-3.004Zm.958 1.075L6.696 5.924a1.067 1.067 0 0 1-.801.584l-2.92.424L5.088 8.99a1.067 1.067 0 0 1 .307.944l-.499 2.907 2.61-1.373a1.067 1.067 0 0 1 .993 0l2.61 1.373-.498-2.907a1.067 1.067 0 0 1 .306-.944l2.112-2.06-2.92-.424a1.067 1.067 0 0 1-.801-.584L8 3.28h.003Z"
                />
                <path
                  class="filled"
                  fill="currentColor"
                  d="M7.045 2.205a1.067 1.067 0 0 1 1.914 0l1.481 3.003 3.315.48a1.067 1.067 0 0 1 .59 1.82l-2.4 2.338.568 3.302a1.067 1.067 0 0 1-1.546 1.125L8 12.713l-2.965 1.56a1.067 1.067 0 0 1-1.547-1.125l.565-3.302-2.4-2.337a1.067 1.067 0 0 1 .594-1.82l3.314-.48 1.484-3.004Z"
                  style="clip-path: inset(0 ${clip}% 0 0)"
                />
              </svg>`
            : html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  class="empty"
                  fill="currentColor"
                  d="M7.125 2.834a3.542 3.542 0 0 0-4.743.315C.974 4.593.98 6.94 2.394 8.39l5.235 5.37c.216.222.57.222.785 0l5.207-5.339a3.776 3.776 0 0 0-.015-5.24 3.552 3.552 0 0 0-5.113-.012l-.498.51-.504-.518a3.702 3.702 0 0 0-.364-.326l-.002-.001Zm2.428 1.369a2.069 2.069 0 0 1 2.99.013c.856.878.856 2.302.014 3.172l-.002.002-4.535 4.65-4.565-4.683a2.293 2.293 0 0 1-.012-3.173 2.066 2.066 0 0 1 2.985.013l.504.517a1.482 1.482 0 0 0 2.124 0l.497-.511Z"
                />
                <path
                  class="filled"
                  fill="currentColor"
                  d="M7.49 3.163a3.548 3.548 0 0 0-5.109-.015c-1.408 1.445-1.4 3.793.015 5.243l5.232 5.37c.217.222.57.222.786 0l5.207-5.34a3.776 3.776 0 0 0-.015-5.239 3.55 3.55 0 0 0-5.113-.013l-.498.511-.504-.517Z"
                  style="clip-path: inset(0 ${clip}% 0 0)"
                />
              </svg>`}
        </span>
      `;
    });
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    return html`
      <div
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--has-label': hasLabel,
          'form-control--has-help-text': hasHelpText
        })}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          for=${this.generatedId}
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${classMap({
              rating: true,
              'rating--disabled': this.disabled,
              'rating--readonly': this.readonly,
              'rating--focused': this.isFocused,
              [`rating--${this.size}`]: true
            })}
            id=${this.generatedId}
            role="slider"
            tabindex=${this.readonly || this.disabled ? '-1' : '0'}
            aria-readonly=${this.readonly ? 'true' : 'false'}
            aria-disabled=${this.disabled ? 'true' : 'false'}
            aria-valuenow=${this.value}
            aria-valuemin="0"
            aria-valuemax=${this.max}
            aria-label=${ifDefined(this.ariaLabel || this.label)}
            aria-labelledby=${ifDefined(hasLabel ? `${this.generatedId}-label` : undefined)}
            aria-describedby=${ifDefined(hasHelpText ? `${this.generatedId}-help-text` : undefined)}
            @click=${this.handleClick}
            @keydown=${this.handleKeyDown}
            @mouseenter=${this.handleMouseEnter}
            @mouseleave=${this.handleMouseLeave}
            @mousemove=${this.handleMouseMove}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          >
            ${this.renderItems()}
          </div>

          <input
            class="rating__control"
            id=${`${this.generatedId}-input`}
            type="number"
            name=${this.name}
            .value=${live(this.value.toString())}
            ?disabled=${this.readonly || this.disabled}
            ?required=${this.required}
            min="0"
            max=${this.max}
            step=${this.precision}
            tabindex="-1"
            aria-hidden="true"
            form=${ifDefined(this.form || undefined)}
            aria-labelledby=${ifDefined(hasLabel ? `${this.generatedId}-label` : undefined)}
            aria-describedby=${ifDefined(hasHelpText ? `${this.generatedId}-help-text` : undefined)}
            @invalid=${this.handleInvalid}
          />
        </div>

        <slot
          name="help-text"
          id=${`${this.generatedId}-help-text`}
          part="form-control-help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? 'false' : 'true'}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
  }
}

export { CpsRating };

declare global {
  interface HTMLElementTagNameMap {
    'cps-rating': CpsRating;
  }
}
