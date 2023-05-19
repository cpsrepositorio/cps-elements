import './icon-button';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../internal/default-value';
import { FormControlController } from '../internal/form';
import { HasSlotController } from '../internal/slot';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { LocalizeController } from '../utilities/localize';
import { uuid } from '../internal/uuid';
import { watch } from '../internal/watch';
import BaseElement from '../internal/base-element';
import styles from './input/input.styles';
import type { BaseFormControl } from '../internal/base-form-control';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Caixas de entrada (_inputs_) coletam dados preenchidos pelos usuários.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/input
 * @status stable
 * @since 0.3
 *
 * @dependency cps-icon-button
 *
 * @slot label - Rótulo informativo do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot suffix - Um ícone ou elemento similar após o conteúdo principal.
 * @slot help-text - Texto de apoio para auxílio ao preenchimento do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `help-text`.
 *
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada pelo usuário.
 * @event cps-clear - Emitido quando o botão de limpar é ativado (caso `clearable` esteja em uso).
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-input - Emitido quando o controle recebe entrada de dados.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @csspart form-control - O agrupamento de controle de formulário que engloba todos os elementos, como rótulo, caixa de entrada, e texto de apoio.
 * @csspart form-control-label - Elemento que embrulha o rótulo do controle de formulário.
 * @csspart form-control-input - Elemento que embrulha o campo do controle de formulário.
 * @csspart form-control-help-text - Elemento que embrulha o texto de apoio do controle de formulário.
 * @csspart base - O elemento base que embrulha o `<input>` e eventuais prefixo e sufixo.
 * @csspart input - O controle `<input>` interno propriamente dito.
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart suffix - O elemento que embrulha a renderização do _slot_ `suffix`.
 * @csspart clear-button - O botão de limpar o campo (caso `clearable` esteja em uso).
 * @csspart clear-button__base - A parte `base` re-exportada do botão de limpar.
 * @csspart clear-button__icon - A parte `icon` re-exportada do botão de limpar.
 * @csspart password-toggle-button - O botão de alternar visibilidade de senha (caso `password-toggle` esteja em uso).
 * @csspart password-toggle-button__base - A parte `base` re-exportada do botão de visibilidade de senha.
 * @csspart password-toggle-button__icon - A parte `icon` re-exportada do botão de visibilidade de senha.
 */
@customElement('cps-input')
export default class CpsInput extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['cps-blur', 'cps-input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private readonly localize = new LocalizeController(this);

  @query('.input__control') input: HTMLInputElement;

  @state() private hasFocus = false;
  @state() private generatedId = '';

  /* Um valor vazio previne que as dicas de validação do navegador apareçam ao passar o mouse. */
  @property() title = '';

  /**
   * O tipo do campo. Funciona da mesma forma que um elemento `<input>` nativo,
   * mas apenas um subconjunto de tipos é suportado. O padrão é `text`.
   */
  // prettier-ignore
  @property({ reflect: true }) type: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' = 'text';

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
   * O valor do botão, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property() value = '';

  /** O valor padrão do controle de formulário. Usado principalmente para redefinir o campo. */
  @defaultValue() defaultValue = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text` em vez disso. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Adiciona um botão de limpar exibido quando o campo não estiver vazio. */
  @property({ type: Boolean }) clearable = false;

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Texto de espaço reservado para exibir uma dica quando o campo estiver vazio. */
  @property() placeholder = '';

  /** Torna o campo somente leitura. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /** Adiciona um botão de alternância de visibilidade de senha. Aplicável somente se `type` for `password`. */
  @property({ attribute: 'password-toggle', type: Boolean }) passwordToggle = false;

  /** Determina se uma senha em preenchimento está visível como texto plano neste momento. Aplicável somente se `type` for `password`. */
  @property({ attribute: 'password-visible', type: Boolean }) passwordVisible = false;

  /** Força ocultar os botões de incremento/decremento nativos do navegador para entradas numéricas. Aplicável somente se `type` for `number`. */
  @property({ attribute: 'no-spin-buttons', type: Boolean }) noSpinButtons = false;

  /**
   * O formulário "dono" deste botão. Se não informado, o formulário mais próximo na hierarquia
   * até este botão será utilizado. Se informado, o valor deve ser um `id` único de um formulário
   * existente no documento.
   */
  @property({ reflect: true }) form = '';

  /** Torna o campo como sendo de preenchimento obrigatório. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Uma expressão regular para validar a entrada do campo. */
  @property() pattern: string;

  /** O tamanho mínimo de caracteres que serão considerados válidos. */
  @property({ type: Number }) minlength: number;

  /** O tamanho máximo de caracteres que serão considerados válidos. */
  @property({ type: Number }) maxlength: number;

  /** O valor mínimo que será considerado válido. Aplicável somente se `type` for `date` ou `number`. */
  @property() min: number | string;

  /** O valor máximo que será considerado válido. Aplicável somente se `type` for `date` ou `number`. */
  @property() max: number | string;

  /**
   * Especifica a granularidade que o valor deve obedecer, ou o valor especial `any` que significa que nenhum passo é
   * implicado, permitindo qualquer valor numérico. Aplicável somente se `type` for `date` ou `number`.
   */
  @property() step: number | 'any';

  /** Controla se e como a entrada de texto é capitalizada enquanto inserida pelo usuário. */
  @property() autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

  /** Indica se o recurso de correção automática do navegador deve ser utilizado. */
  @property() autocorrect: 'off' | 'on';

  /**
   * Especifica quais permissões o navegador tem para fornecer assistência no preenchimento dos valores do campo.
   * Consulte
   * [esta documentação no MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) para a lista de valores disponíveis.
   */
  @property() autocomplete: string;

  /** Indica que o campo deve receber foco assim que a página for carregada. */
  @property({ type: Boolean }) autofocus: boolean;

  /** Utilizado para definir a aparência e o comportamento da tela `Enter` em teclados virtuais. */
  @property() enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';

  /** Habilita correção ortográfica no campo. */
  @property({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: value => (!value || value === 'false' ? false : true),
      toAttribute: value => (value ? 'true' : 'false')
    }
  })
  spellcheck = true;

  /**
   * Informa o navegador qual o tipo de dados esperado para ser inserido pelo usuário. Isso permite que o navegador
   * apresente o teclado virtual apropriado para o tipo de dados em dispositivos móveis.
   */
  @property() inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //

  /**
   * Obtém ou define o valor atual como um objeto `Date`. Retorna `null` se o valor não puder ser convertido.
   */
  get valueAsDate() {
    const input = document.createElement('input');
    input.type = 'date';
    input.value = this.value;
    return input.valueAsDate;
  }

  set valueAsDate(newValue: Date | null) {
    try {
      const input = document.createElement('input');
      input.type = 'date';
      input.valueAsDate = newValue;
      this.value = input.value;
    } catch (error) {
      if (error instanceof Error && error?.name === 'InvalidStateError') {
        this.value = newValue ? newValue.toISOString().split('T')[0] : '';
      } else {
        throw error;
      }
    }
  }

  /**
   * Obtém ou define o valor atual como um número. Retorna `NaN` se o valor não puder ser convertido.
   */
  get valueAsNumber() {
    const input = document.createElement('input');
    input.type = 'number';
    input.value = this.value;
    return input.valueAsNumber;
  }

  set valueAsNumber(newValue: number) {
    const input = document.createElement('input');
    input.type = 'number';
    input.valueAsNumber = newValue;
    this.value = input.value;
  }

  /** Obtém o objeto de estado de validade do botão. */
  get validity() {
    return this.input.validity;
  }

  /** Obtém a mensagem de validação do botão. */
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

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleChange() {
    this.value = this.input.value;
    this.emit('cps-change');
  }

  private handleClearClick(event: MouseEvent) {
    this.value = '';
    this.emit('cps-clear');
    this.emit('cps-input');
    this.emit('cps-change');
    this.input.focus();

    event.stopPropagation();
  }

  private handleBaseClick(event: MouseEvent) {
    if (!this.disabled) {
      this.input.focus();
      event.stopPropagation();
    }
  }

  private handleClick(event: MouseEvent) {
    event.stopPropagation();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('cps-focus');
  }

  private handleInput() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit('cps-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleKeyDown(event: KeyboardEvent) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

    // Pressing enter when focused on an input should submit the form like a native input, but we wait a tick before
    // submitting to allow users to cancel the keydown event if they need to
    if (event.key === 'Enter' && !hasModifier) {
      setTimeout(() => {
        //
        // When using an Input Method Editor (IME), pressing enter will cause the form to submit unexpectedly. One way
        // to check for this is to look at event.isComposing, which will be true when the IME is open.
        //
        // See https://github.com/cpsrepositorio/cps-elements/pull/988
        //
        if (!event.defaultPrevented && !event.isComposing) {
          this.formControlController.submit();
        }
      });
    }
  }

  private handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch('step', { waitUntilFirstUpdate: true })
  handleStepChange() {
    // If step changes, the value may become invalid so we need to recheck after the update. We set the new step
    // imperatively so we don't have to wait for the next render to report the updated validity.
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
  }

  /** Coloca o foco no botão. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Remove o foco do botão. */
  blur() {
    this.input.blur();
  }

  /** Seleciona todo o texto existente no campo. */
  select() {
    this.input.select();
  }

  /** Define as posições de início e término da seleção de texto do campo (índices baseados em `0`). */
  setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Atualiza um intervalo de texto do campo com o novo valor informado (índices baseados em `0`). */
  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: 'select' | 'start' | 'end' | 'preserve'
  ) {
    // @ts-expect-error - start, end, and selectMode are optional
    this.input.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }

  /** Exibe o menu seletor de opções nativo do navegador, de acordo com o `type` do campo (funciona apenas se o navegador suportar um menu seletor para o tipo de entrada em questão). */
  showPicker() {
    if ('showPicker' in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }

  /** Incrementa o valor de um campo numérico pelo valor do atributo `step` (somente se o `type` definido for `number`). */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }

  /** Decrementa o valor de um campo numérico pelo valor do atributo `step` (somente se o `type` definido for `number`). */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
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
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon =
      this.clearable && !this.disabled && !this.readonly && (typeof this.value === 'number' || this.value.length > 0);

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
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${classMap({
              input: true,

              // Sizes
              'input--small': this.size === 'small',
              'input--medium': this.size === 'medium',
              'input--large': this.size === 'large',

              // States
              'input--disabled': this.disabled,
              'input--focused': this.hasFocus,
              'input--empty': !this.value,
              'input--no-spin-buttons': this.noSpinButtons
            })}
            @click=${this.handleBaseClick}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id=${this.generatedId}
              class="input__control"
              type=${this.type === 'password' && this.passwordVisible ? 'text' : this.type}
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              name=${ifDefined(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ifDefined(this.placeholder)}
              minlength=${ifDefined(this.minlength)}
              maxlength=${ifDefined(this.maxlength)}
              min=${ifDefined(this.min)}
              max=${ifDefined(this.max)}
              step=${ifDefined(this.step as number)}
              .value=${live(this.value)}
              autocapitalize=${ifDefined(this.autocapitalize)}
              autocomplete=${ifDefined(this.autocomplete)}
              autocorrect=${ifDefined(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ifDefined(this.pattern)}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.inputmode)}
              aria-describedby=${hasHelpText ? `${this.generatedId}-help-text` : undefined}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @click=${this.handleClick}
            />

            ${
              hasClearIcon
                ? html`
                    <cps-icon-button
                      part="clear-button"
                      exportparts="base:clear-button__base, icon:clear-button__icon"
                      name="dismiss"
                      library="system"
                      class="input__clear"
                      aria-label=${this.localize.term('clearEntry')}
                      @click=${this.handleClearClick}
                      size=${this.size}
                    ></cps-icon-button>
                  `
                : ''
            }

            ${
              this.passwordToggle && !this.disabled
                ? html`
                    <cps-icon-button
                      part="password-toggle-button"
                      exportparts="base:password-toggle-button__base, icon:password-toggle-button__icon"
                      name=${this.passwordVisible ? 'eye-off' : 'eye'}
                      library="system"
                      class="input__password-toggle"
                      aria-label=${this.localize.term(this.passwordVisible ? 'hidePassword' : 'showPassword')}
                      @click=${this.handlePasswordToggle}
                      size=${this.size}
                    ></cps-icon-button>
                  `
                : ''
            }

            ${
              this.type === 'date'
                ? html`
                    <cps-icon-button
                      name="calendar"
                      library="system"
                      class="input__date-picker"
                      aria-label=${this.localize.term('clearEntry')}
                      @click=${this.showPicker}
                      size=${this.size}
                    ></cps-icon-button>
                  `
                : ''
            }

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
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
      </div>
    `;
  }
}

export { CpsInput };

declare global {
  interface HTMLElementTagNameMap {
    'cps-input': CpsInput;
  }
}
