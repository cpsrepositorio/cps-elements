import '../icon.js';
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
import styles from './textarea.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Caixas de texto (_textareas_) coletam dados do usuário e permitem múltiplas linhas de texto.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/textare
 * @status stable
 * @since 0.4
 *
 * @dependency cps-icon
 *
 * @slot label - Rótulo informativo do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 * @slot help-text - Texto de apoio para auxílio ao preenchimento do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `help-text`.
 *
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada pelo usuário.
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-input - Emitido quando o controle recebe entrada de dados.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @csspart form-control - O agrupamento de controle de formulário que engloba todos os elementos, como rótulo, caixa de entrada, e texto de apoio.
 * @csspart form-control-label - Elemento que embrulha o rótulo do controle de formulário.
 * @csspart form-control-input - Elemento que embrulha o campo do controle de formulário.
 * @csspart form-control-help-text - Elemento que embrulha o texto de apoio do controle de formulário.
 * @csspart base - O elemento base que embrulha o `<textarea>`.
 * @csspart textarea - O controle `<textarea>` interno propriamente dito.
 */
@customElement('cps-textarea')
export default class CpsTextarea extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['cps-blur', 'cps-input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private resizeObserver: ResizeObserver;

  @query('.textarea__control') textarea: HTMLTextAreaElement;

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
  @property() value = '';

  /** O valor padrão do controle de formulário. Usado principalmente para redefinir o campo. */
  @defaultValue() defaultValue = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text` em vez disso. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Texto de espaço reservado para exibir uma dica quando o campo estiver vazio. */
  @property() placeholder = '';

  /** O número de linhas para exibir por padrão. */
  @property({ type: Number }) rows = 4;

  /** Controla como o campo pode ser redimensionado. */
  @property() resize: 'none' | 'vertical' | 'auto' = 'vertical';

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Torna o campo somente leitura. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * O formulário "dono" deste controle de formulário. Se não informado, o formulário mais próximo na hierarquia
   * até este elemento será utilizado. Se informado, o valor deve ser um `id` único de um formulário
   * existente no documento.
   */
  @property({ reflect: true }) form = '';

  /** Torna o campo como sendo de preenchimento obrigatório. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** O tamanho mínimo de caracteres que serão considerados válidos. */
  @property({ type: Number }) minlength: number;

  /** O tamanho máximo de caracteres que serão considerados válidos. */
  @property({ type: Number }) maxlength: number;

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

  /** Obtém o objeto de estado de validade do campo. */
  get validity() {
    return this.textarea.validity;
  }

  /** Obtém a mensagem de validação do campo. */
  get validationMessage() {
    return this.textarea.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());

    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.textarea);
    });
  }

  @watch('id')
  handleIdChange() {
    this.generatedId = uuid(this.id);
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.textarea);
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleChange() {
    this.value = this.textarea.value;
    this.setTextareaHeight();
    this.emit('cps-change');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('cps-focus');
  }

  private handleInput() {
    this.value = this.textarea.value;
    this.formControlController.updateValidity(true);
    this.emit('cps-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private setTextareaHeight() {
    if (this.resize === 'auto') {
      this.textarea.style.height = 'auto';
      this.textarea.style.height = `${this.textarea.scrollHeight}px`;
    } else {
      (this.textarea.style.height as string | undefined) = undefined;
    }
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  @watch('rows', { waitUntilFirstUpdate: true })
  handleRowsChange() {
    this.setTextareaHeight();
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.setTextareaHeight();
  }

  /** Coloca o foco no campo. */
  focus(options?: FocusOptions) {
    this.textarea.focus(options);
  }

  /** Remove o foco do campo. */
  blur() {
    this.textarea.blur();
  }

  /** Seleciona todo o texto existente no campo. */
  select() {
    this.textarea.select();
  }

  /** Obtém ou atribui a posição de rolagem do campo. */
  scrollPosition(position?: { top?: number; left?: number }): { top: number; left: number } | undefined {
    if (position) {
      if (typeof position.top === 'number') this.textarea.scrollTop = position.top;
      if (typeof position.left === 'number') this.textarea.scrollLeft = position.left;
      return undefined;
    }

    return {
      top: this.textarea.scrollTop,
      left: this.textarea.scrollTop
    };
  }

  /** Define as posições de início e término da seleção de texto do campo (índices baseados em `0`). */
  setSelectionRange(
    selectionStart: number,
    selectionEnd: number,
    selectionDirection: 'forward' | 'backward' | 'none' = 'none'
  ) {
    this.textarea.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }

  /** Atualiza um intervalo de texto do campo com o novo valor informado (índices baseados em `0`). */
  setRangeText(
    replacement: string,
    start?: number,
    end?: number,
    selectMode?: 'select' | 'start' | 'end' | 'preserve'
  ) {
    // @ts-expect-error - start, end, and selectMode are optional
    this.textarea.setRangeText(replacement, start, end, selectMode);

    if (this.value !== this.textarea.value) {
      this.value = this.textarea.value;
    }
  }

  /** Verifica a validade em um formulário, sem exibir uma mensagem de validação. Retorna `true` quando válido, e `false` quando inválido. */
  checkValidity() {
    return this.textarea.checkValidity();
  }

  /** Obtém o formulário associado com este componente, se algum estiver. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Verifica a validade em um formulário, e exibe as mensagem de validação do navegador caso o resultado seja inválido. */
  reportValidity() {
    return this.textarea.reportValidity();
  }

  /** Define uma mensagem de validação personalizada. Passar uma `string` vazia como argumento restaura a validade do elemento. */
  setCustomValidity(message: string) {
    this.textarea.setCustomValidity(message);
    this.formControlController.updateValidity();
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
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${classMap({
              textarea: true,
              'textarea--small': this.size === 'small',
              'textarea--medium': this.size === 'medium',
              'textarea--large': this.size === 'large',
              'textarea--disabled': this.disabled,
              'textarea--focused': this.hasFocus,
              'textarea--empty': !this.value,
              'textarea--resize-none': this.resize === 'none',
              'textarea--resize-vertical': this.resize === 'vertical',
              'textarea--resize-auto': this.resize === 'auto'
            })}
          >
            <textarea
              part="textarea"
              id=${this.generatedId}
              class="textarea__control"
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              name=${ifDefined(this.name)}
              .value=${live(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ifDefined(this.placeholder)}
              rows=${ifDefined(this.rows)}
              minlength=${ifDefined(this.minlength)}
              maxlength=${ifDefined(this.maxlength)}
              autocapitalize=${ifDefined(this.autocapitalize)}
              autocorrect=${ifDefined(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${ifDefined(this.spellcheck)}
              enterkeyhint=${ifDefined(this.enterkeyhint)}
              inputmode=${ifDefined(this.inputmode)}
              aria-describedby=${hasHelpText ? `${this.generatedId}-help-text` : undefined}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>

            ${this.resize === 'vertical'
              ? html` <cps-icon name="textarea-resizer" library="system" class="textarea__resizer"></cps-icon> `
              : ''}
          </div>
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

export { CpsTextarea };

declare global {
  interface HTMLElementTagNameMap {
    'cps-textarea': CpsTextarea;
  }
}
