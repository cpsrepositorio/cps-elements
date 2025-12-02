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
import styles from './switch.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Interruptores (_switches_) permitem alternar entre estados ligado e desligado.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/switch
 * @status stable
 * @since 0.24.0
 *
 * @slot - Rótulo informativo do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 *
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada pelo usuário.
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-input - Emitido quando o controle recebe entrada de dados.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @csspart base - O elemento base que embrulha o `<input>` e eventuais elementos de apoio para sua renderização.
 * @csspart control - O elemento arredondado que embrulha o estado de checagem do campo.
 * @csspart control--checked - Obtém para estilização o elemento `control`, somente quando o campo está marcado.
 * @csspart knob - O elemento circular que desliza sobre o controle dependendo do estado de checagem do campo.
 * @csspart knob--checked - Obtém para estilização o elemento `knob`, somente quando o campo está marcado.
 * @csspart label - O elemento que embrulha o rótulo do campo, um elemento `<label>`.
 *
 * @cssprop --border - A espessura da borda do controle. Padrão: `1px`.
 * @cssprop --padding - Espaçamento horizontal entre o _knob_ e as extremidades internas do controle. Padrão: `2px`.
 */
@customElement('cps-switch')
export default class CpsSwitch extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    value: (control: CpsSwitch) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: CpsSwitch) => control.defaultChecked,
    setValue: (control: CpsSwitch, checked: boolean) => (control.checked = checked)
  });
  private readonly hasSlotController = new HasSlotController(this);

  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private hasFocus = false;
  @state() private generatedId = '';

  /* Um valor vazio previne que as dicas de validação do navegador apareçam ao passar o mouse. */
  @property() title = '';

  /**
   * O identificador único do campo, usado como estratégia de vinculação ao rótulo e/ou texto de apoio anexado.
   * Se não for fornecido, um UUID é gerado automaticamente.
   */
  @property() id = '';

  /**
   * O nome do campo, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property() name = '';

  /**
   * O valor do campo, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property() value: string;

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Determina o estado de checagem do campo, ou seja, quando presente, o campo encontra-se marcado. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** O valor padrão do controle de formulário. Usado principalmente para redefinir o campo. */
  @defaultValue('checked') defaultChecked = false;

  /**
   * O formulário "dono" deste controle de formulário. Se não informado, o formulário mais próximo na hierarquia
   * até este elemento será utilizado. Se informado, o valor deve ser um `id` único de um formulário
   * existente no documento.
   */
  @property({ reflect: true }) form = '';

  /** Torna o campo como sendo de preenchimento obrigatório. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Adiciona posicionamento fluido ao rótulo, permitindo que ocupe todo o espaço disponível à esquerda, automaticamente movendo o interruptor para a direita. */
  @property({ type: Boolean, reflect: true }) fluid = false;

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
    this.generatedId = uuid(this.id);
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleClick() {
    this.checked = !this.checked;
    this.emit('cps-change');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleInput() {
    this.formControlController.updateValidity(true);
    this.emit('cps-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('cps-focus');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked;
    this.formControlController.updateValidity();
  }

  /** Simula um _click_ no campo. */
  click() {
    this.input.click();
  }

  /** Coloca o foco no campo. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Remove o foco do campo. */
  blur() {
    this.input.blur();
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

  render() {
    const hasLabelSlot = this.hasSlotController.test('[default]');
    const hasLabel = this.label ? true : !!hasLabelSlot;

    return html`
      <label
        part="base"
        class=${classMap({
          switch: true,
          'switch--checked': this.checked,
          'switch--disabled': this.disabled,
          'switch--focused': this.hasFocus,
          'switch--small': this.size === 'small',
          'switch--medium': this.size === 'medium',
          'switch--large': this.size === 'large',
          'switch--fluid': this.fluid,
          'switch--has-label': hasLabel
        })}
      >
        <input
          id=${this.generatedId}
          class="switch__input"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          id=${`${this.generatedId}-control`}
          part="control${this.checked ? ' control--checked' : ''}"
          class="switch__control"
        >
          <span part="knob${this.checked ? ' knob--checked' : ''}" class="switch__knob"></span>
        </span>

        ${hasLabel
          ? html`
              <label
                id=${`${this.generatedId}-label`}
                part="label"
                class="switch__label"
                for=${this.generatedId}
                aria-hidden=${hasLabel ? 'false' : 'true'}
              >
                <slot>${this.label}</slot>
              </label>
            `
          : ''}
      </label>
    `;
  }
}

export { CpsSwitch };

declare global {
  interface HTMLElementTagNameMap {
    'cps-switch': CpsSwitch;
  }
}
