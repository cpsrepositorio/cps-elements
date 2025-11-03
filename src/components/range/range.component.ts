import '../tooltip.js';
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
import styles from './range.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Campos de intervalo (_range_) permitem selecionar um valor numérico dentro de um intervalo mínimo e máximo.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/range
 * @status stable
 * @since 0.23.0
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
 * @csspart base - O elemento principal que envolve os símbolos de intervalo.
 */
@customElement('cps-range')
export default class CpsRange extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    value: (control: CpsRange) => (control.value > 0 ? control.value.toString() : undefined),
    defaultValue: (control: CpsRange) => control.defaultValue,
    setValue: (control: CpsRange, value: number) => (control.value = value)
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');

  @query('.range__control') input: HTMLInputElement;
  @query('.range') range: HTMLElement;
  @query('.range__track') track!: HTMLElement;

  @state() private generatedId = '';
  @state() private isFocused = false;
  @state() private isTooltipOpen = false;

  private hasInitialValueBeenProcessed = false;
  private isDragging = false;
  private tooltipTimeoutId: NodeJS.Timeout | null = null;

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O rótulo de acessibilidade para a intervalo. Necessário apenas se um `label` visual não for fornecido. */
  @property({ attribute: 'aria-label' }) ariaLabel: string;

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text` em vez disso. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** O nome do campo, submetido em par _name_/_value_ com os dados do formulário. */
  @property() name = '';

  /** O valor do campo, submetido em par _name_/_value_ com os dados do formulário. Deve ser um valor entre `min` e `max`. */
  @property({ type: Number }) value: number;

  /** O valor padrão do controle de formulário. Usado principalmente para redefinir o campo. */
  @defaultValue() defaultValue = 0;

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** O valor mínimo do intervalo, por padrão `0`. Deve ser menor que `max`. */
  @property({ type: Number }) min = 0;

  /** O valor máximo do intervalo, por padrão `100`. Deve ser maior que `min`. */
  @property({ type: Number }) max = 100;

  /** A precisão para a qual arredondar, por padrão `1`. Altere para permitir intervalos decimais. */
  @property({ type: Number }) step = 1;

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

  /**
   * Se verdadeiro, desativa completamente a exibição de dica de ferramenta durante a interação com o campo.
   */
  @property({ type: Boolean, attribute: 'no-tooltip', reflect: true }) noTooltip = false;

  /** Obtém o objeto de estado de validade do campo. */
  get validity() {
    return this.input.validity;
  }

  /** Obtém a mensagem de validação do campo. */
  get validationMessage() {
    return this.input.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();
    this.generatedId = this.id ? this.id : uuid();

    if (typeof this.value !== 'number') {
      this.value = this.snapToStep(this.getMidpoint());
    }
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  @watch('id')
  handleIdChange() {
    this.generatedId = this.id ? this.id : uuid();
  }

  @watch('value')
  async handleValueChange() {
    this.normalizeValue();
    await this.handleValueChangeEffects();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }

  @watch('readonly', { waitUntilFirstUpdate: true })
  handleReadonlyChange() {
    this.formControlController.setValidity(this.readonly);
  }

  @watch('min')
  handleMinChange() {
    if (this.min >= this.max) {
      console.error('CpsRange Error: Min must be less than max.');

      this.min = 0;
      this.max = 100;
    }

    this.clampCurrentValue();
  }

  @watch('max')
  handleMaxChange() {
    if (this.max <= this.min) {
      console.error('CpsRange Error: Max must be greater than min.');

      this.min = 0;
      this.max = 100;
    }

    this.clampCurrentValue();
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
    if (this.range) this.range.focus(options);
  }

  /** Remove o foco do campo. */
  blur() {
    if (this.range) this.range.blur();
    this.isTooltipOpen = false;
    this.clearTooltipTimeout();
  }

  private normalizeValue() {
    if (typeof this.value !== 'number' || Number.isNaN(this.value)) {
      this.value = this.snapToStep(this.getMidpoint());
    } else {
      this.value = this.clampValue(this.value);
    }
  }

  private async handleValueChangeEffects() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.emit('cps-change');

    if (this.noTooltip) return;

    if (!this.hasInitialValueBeenProcessed) {
      this.hasInitialValueBeenProcessed = true;
      return;
    }

    this.clearTooltipTimeout();
    this.isTooltipOpen = true;

    if (!this.isDragging) this.scheduleTooltipHide();

    this.requestUpdate();
  }

  private handleFocus() {
    if (this.readonly || this.disabled) return;
    this.isFocused = true;
    this.emit('cps-focus');
  }

  private handleBlur() {
    if (!this.noTooltip) {
      this.clearTooltipTimeout();
      this.isTooltipOpen = false;
      this.requestUpdate();
    }

    this.isFocused = false;
    this.emit('cps-blur');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private getValueFromMouse(event: MouseEvent) {
    const { left, width } = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = (event.clientX - left) / width;
    return this.clampValue(this.valueFromPercent(ratio));
  }

  private getEffectiveStep() {
    const step = Number(this.step);
    return step > 0 ? step : 1;
  }

  private clampValue(value: number) {
    return Math.min(this.max, Math.max(this.min, value));
  }

  private getMidpoint() {
    return (this.min + this.max) / 2;
  }

  private valueFromPercent(percent: number) {
    return this.min + percent * (this.max - this.min);
  }

  private percentFromValue(value: number) {
    return ((value - this.min) / (this.max - this.min)) * 100;
  }

  private snapToStep(rawValue: number) {
    const min = this.min;
    const step = this.getEffectiveStep();
    const decimalPlaces = (step.toString().split('.')[1] || '').length;
    const snapped = Math.round((rawValue - min) / step) * step + min;
    return Number(this.clampValue(snapped).toFixed(decimalPlaces));
  }

  private clampCurrentValue() {
    if (typeof this.value === 'number') {
      if (this.value < this.min) this.value = this.min;
      else if (this.value > this.max) this.value = this.max;
    }
  }

  private clearTooltipTimeout() {
    if (this.tooltipTimeoutId !== null) {
      clearTimeout(this.tooltipTimeoutId);
      this.tooltipTimeoutId = null;
    }
  }

  private scheduleTooltipHide() {
    this.clearTooltipTimeout();

    this.tooltipTimeoutId = setTimeout(() => {
      if (this.isDragging) return;
      this.isTooltipOpen = false;
      this.tooltipTimeoutId = null;
      this.requestUpdate();
    }, 1000);
  }

  private handleInteraction(value: number, hideTooltip = true) {
    this.value = value;
    if (this.noTooltip) return;

    this.isTooltipOpen = true;
    if (hideTooltip) this.scheduleTooltipHide();

    this.requestUpdate();
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (this.readonly || this.disabled) return;

    const key = event.key;
    const isStart = ['Backspace', 'Delete', 'Home'].includes(key);
    const isEnd = key === 'End';
    const isArrow = ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'].includes(key);

    if (!isStart && !isEnd && !isArrow) return;

    event.preventDefault();
    this.clearTooltipTimeout();
    this.isTooltipOpen = true;

    const applyValue = (value: number) => {
      if (this.noTooltip) {
        this.value = value;
        return;
      }

      if (value !== this.value) this.handleInteraction(value);
      this.scheduleTooltipHide();
    };

    if (isStart) {
      applyValue(this.min);
      return;
    }

    if (isEnd) {
      applyValue(this.max);
      return;
    }

    if (isArrow) {
      const step = this.getEffectiveStep();
      let delta = step;

      if (event.shiftKey) {
        const rangeSpan = this.max - this.min;
        const multiples = Math.max(1, Math.round((rangeSpan * 0.1) / step));
        delta = step * multiples;
      }

      const direction = ['ArrowLeft', 'ArrowDown'].includes(key) ? -1 : 1;
      const raw = this.value + direction * delta;
      const rounded = this.snapToStep(raw);

      if (this.noTooltip) {
        if (rounded !== this.value) this.value = rounded;
        return;
      }

      applyValue(rounded);
    }
  }

  private handleClick(event: MouseEvent) {
    if (this.readonly || this.disabled) return;

    this.clearTooltipTimeout();

    if (this.noTooltip) {
      const newValue = this.snapToStep(this.getValueFromMouse(event));
      this.value = newValue;
      return;
    }

    const newValue = this.snapToStep(this.getValueFromMouse(event));
    this.handleInteraction(newValue);
  }

  private handleLabelClick = (event: MouseEvent) => {
    event.preventDefault();
    this.focus();
  };

  private handlePointerDown = (event: PointerEvent) => {
    if (this.readonly || this.disabled) return;

    this.clearTooltipTimeout();
    this.isDragging = true;
    this.isTooltipOpen = true;

    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    addEventListener('pointermove', this.handlePointerMove);
    addEventListener('pointerup', this.handlePointerUp);

    this.focus();
    this.requestUpdate();
  };

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.isDragging) return;

    const { left, width } = this.track.getBoundingClientRect();
    let percent = (event.clientX - left) / width;
    percent = Math.max(0, Math.min(1, percent));
    const newValue = this.snapToStep(this.valueFromPercent(percent));

    if (newValue !== this.value) this.handleInteraction(newValue, false);
  };

  private handlePointerUp = () => {
    this.isDragging = false;

    removeEventListener('pointermove', this.handlePointerMove);
    removeEventListener('pointerup', this.handlePointerUp);

    if (!this.noTooltip) {
      this.clearTooltipTimeout();

      this.isTooltipOpen = true;
      this.scheduleTooltipHide();
    }

    this.requestUpdate();
  };

  private renderSlider() {
    const percent = this.percentFromValue(this.value);

    let thumb = html`<div
      part="thumb"
      class="range__thumb"
      style="left: calc((100% - var(--cps-range-height)) * ${percent} / 100 + var(--cps-range-height) / 2)"
      @pointerdown=${this.handlePointerDown}
    ></div>`;

    if (!this.noTooltip) {
      const locale = navigator.language || (navigator as unknown as Record<string, string>).userLanguage;
      const value = this.value.toLocaleString(locale, { maximumFractionDigits: 10 });

      thumb = html`<cps-tooltip .open=${this.isTooltipOpen} trigger="manual" placement="top" content="${value}">
        ${thumb}
      </cps-tooltip>`;
    }

    return html`
      <div part="track" class="range__track">
        <div part="fill" class="range__fill" style="width: ${percent}%"></div>
        ${thumb}
      </div>
    `;
  }

  render() {
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasLabel = this.label ? true : !!hasLabelSlot;

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
              range: true,
              'range--disabled': this.disabled,
              'range--readonly': this.readonly,
              'range--focused': this.isFocused,
              [`range--${this.size}`]: true
            })}
            id=${this.generatedId}
            role="slider"
            tabindex=${this.readonly || this.disabled ? '-1' : '0'}
            aria-readonly=${this.readonly ? 'true' : 'false'}
            aria-disabled=${this.disabled ? 'true' : 'false'}
            aria-valuenow=${this.value}
            aria-valuemin="${this.min}"
            aria-valuemax=${this.max}
            aria-label=${ifDefined(this.ariaLabel || this.label)}
            aria-labelledby=${ifDefined(hasLabel ? `${this.generatedId}-label` : undefined)}
            aria-describedby=${ifDefined(hasHelpText ? `${this.generatedId}-help-text` : undefined)}
            @click=${this.handleClick}
            @keydown=${this.handleKeyDown}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          >
            ${this.renderSlider()}
          </div>

          <input
            class="range__control"
            id=${`${this.generatedId}-input`}
            type="number"
            name=${this.name}
            .value=${live(this.value.toString())}
            ?disabled=${this.readonly || this.disabled}
            ?required=${this.required}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            tabindex="-1"
            aria-hidden="true"
            form=${ifDefined(this.form || undefined)}
            aria-labelledby=${ifDefined(hasLabel ? `${this.generatedId}-label` : undefined)}
            aria-describedby=${ifDefined(hasHelpText ? `${this.generatedId}-help-text` : undefined)}
            @invalid=${this.handleInvalid}
          />
        </div>

        ${hasHelpText
          ? html`
              <slot
                name="help-text"
                id=${`${this.generatedId}-help-text`}
                part="form-control-help-text"
                class="form-control__help-text"
              >
                ${this.helpText}
              </slot>
            `
          : ''}
      </div>
    `;
  }
}

export { CpsRange };

declare global {
  interface HTMLElementTagNameMap {
    'cps-range': CpsRange;
  }
}
