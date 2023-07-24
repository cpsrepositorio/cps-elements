import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { HasSlotController } from '../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { uuid } from '../internal/uuid.js';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './radio/radio.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Campos de opção (_radio_) permitem que o usuário selecione uma única opção de um grupo.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/radio
 * @status stable
 * @since 0.6
 *
 * @slot - Rótulo informativo do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 *
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-focus - Emitido quando o controle obtém o foco.
 *
 * @csspart base - O elemento base que embrulha o `<input>` e eventuais elementos de apoio para sua renderização.
 * @csspart control - O elemento circular que embrulha o estado checagem do campo.
 * @csspart control--checked - Obtém para estilização o elemento `control`, somente quando o campo está marcado.
 * @csspart checked-handle - O identificador de estado checado, um elemento `<span>` com estilização circular.
 * @csspart label - O elemento que embrulha o rótulo do campo, um elemento `<label>`.
 */
@customElement('cps-radio')
export default class CpsRadio extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this);

  @state() protected hasFocus = false;
  @state() private generatedId = '';

  /* Um valor vazio previne que as dicas de validação do navegador apareçam ao passar o mouse. */
  @property() title = '';

  /**
   * O identificador único do campo, usado como estratégia de vinculação ao rótulo e/ou texto de apoio anexado.
   * Se não for fornecido, um UUID é gerado automaticamente.
   */
  @property() id = '';

  /**
   * O valor do campo, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property() value: string;

  /**
   * O nome do campo, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property() name = '';

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Determina o estado de checagem do campo, ou seja, quando presente, o campo encontra-se marcado. */
  @property({ type: Boolean, reflect: true }) checked = false;

  @watch('id')
  handleIdChange() {
    this.generatedId = uuid(this.id);
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.setInitialAttributes();
    this.addEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  private addEventListeners() {
    this.addEventListener('blur', this.handleBlur);
    this.addEventListener('click', this.handleClick);
    this.addEventListener('focus', this.handleFocus);
  }

  private removeEventListeners() {
    this.removeEventListener('blur', this.handleBlur);
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('focus', this.handleFocus);
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('cps-focus');
  }

  private setInitialAttributes() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', '-1');
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('checked')
  handleCheckedChange() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.setAttribute('tabindex', this.checked ? '0' : '-1');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('[default]');
    const hasLabel = this.label ? true : !!hasLabelSlot;

    return html`
      <label
        part="base"
        class=${classMap({
          radio: true,
          'radio--checked': this.checked,
          'radio--disabled': this.disabled,
          'radio--focused': this.hasFocus,
          'radio--small': this.size === 'small',
          'radio--medium': this.size === 'medium',
          'radio--large': this.size === 'large',
          'radio--has-label': hasLabel
        })}
      >
        <input
          id=${this.generatedId}
          class="radio__input"
          type="radio"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span id=${`${this.generatedId}-control`} part="${`control${
      this.checked ? ' control--checked' : ''
    }`}" class="radio__control">
          ${this.checked ? html` <span part="checked-handle" class="radio__checked-handle"></span> ` : ''}
        </span>

        <label
          id=${`${this.generatedId}-label`}
          part="label"
          class="radio__label"
          for=${this.generatedId}
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot>${this.label}</slot>
        </label>
      </span>
    `;
  }
}

export { CpsRadio };

declare global {
  interface HTMLElementTagNameMap {
    'cps-radio': CpsRadio;
  }
}
