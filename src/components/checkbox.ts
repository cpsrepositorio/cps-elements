import './icon';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../internal/default-value';
import { FormControlController } from '../internal/form';
import { HasSlotController } from '../internal/slot';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { uuid } from '../internal/uuid';
import { watch } from '../internal/watch';
import BaseElement from '../internal/base-element';
import styles from './checkbox/checkbox.styles';
import type { BaseFormControl } from '../internal/base-form-control';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Caixas de seleção (_checkboxes_) permitem alternar entre estados marcado ou desmarcado.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/checkbox
 * @status stable
 * @since 0.4
 *
 * @dependency cps-icon
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
 * @csspart control - O elemento quadrado que embrulha o estado checagem do campo.
 * @csspart control--checked - Obtém para estilização o elemento `control`, somente quando o campo está marcado.
 * @csspart control--indeterminate - Obtém para estilização o elemento `control`, somente quando o campo está em estado indeterminado.
 * @csspart checked-icon - O ícone de estado checado, um elemento `<cps-icon>`.
 * @csspart indeterminate-icon - O ícone de estado indeterminado, um elemento `<cps-icon>`.
 * @csspart label - O elemento que embrulha o rótulo do campo, um elemento `<label>`.
 */
@customElement('cps-checkbox')
export default class CpsCheckbox extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    value: (control: CpsCheckbox) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: CpsCheckbox) => control.defaultChecked,
    setValue: (control: CpsCheckbox, checked: boolean) => (control.checked = checked)
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

  /**
   * Apresenta o campo em estado indeterminado.
   * Isso é geralmente aplicado a caixas de seleção que representam o cabeçalho
   * de um comportamento "Selecionar todos/nenhum", quando as caixas de seleção
   * associadas podem ter mistura de estados marcados e desmarcados.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

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
    this.indeterminate = false;
    this.emit('cps-change');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleInput() {
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
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch(['checked', 'indeterminate'], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
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
          checkbox: true,
          'checkbox--checked': this.checked,
          'checkbox--disabled': this.disabled,
          'checkbox--focused': this.hasFocus,
          'checkbox--indeterminate': this.indeterminate,
          'checkbox--small': this.size === 'small',
          'checkbox--medium': this.size === 'medium',
          'checkbox--large': this.size === 'large',
          'checkbox--has-label': hasLabel
        })}
      >
        <input
          id=${this.generatedId}
          class="checkbox__input"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .indeterminate=${live(this.indeterminate)}
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
          part="control${this.checked ? ' control--checked' : ''}${this.indeterminate ? ' control--indeterminate' : ''}"
          class="checkbox__control"
        >
          ${this.checked
            ? html`
                <cps-icon
                  part="checked-icon"
                  class="checkbox__checked-icon"
                  library="system"
                  name="checkmark"
                ></cps-icon>
              `
            : ''}
          ${!this.checked && this.indeterminate
            ? html`
                <cps-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="subtract"
                ></cps-icon>
              `
            : ''}
        </span>

        <label
          id=${`${this.generatedId}-label`}
          part="label"
          class="checkbox__label"
          for=${this.generatedId}
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot>${this.label}</slot>
        </label>
      </label>
    `;
  }
}

export { CpsCheckbox };

declare global {
  interface HTMLElementTagNameMap {
    'cps-checkbox': CpsCheckbox;
  }
}
