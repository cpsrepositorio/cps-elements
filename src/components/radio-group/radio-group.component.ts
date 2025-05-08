import '../button-group.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import {
  customErrorValidityState,
  FormControlController,
  validValidityState,
  valueMissingValidityState
} from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { uuid } from '../../internal/uuid.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './radio-group.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';
import type CpsRadio from '../radio.js';
import type CpsToggleButton from '../toggle-button.js';

/**
 * @summary Grupos de opções englobam múltiplos [Radio](/componentes/radio) ou [Toggle Button](/componentes/toggle-button) para que funcionem como um único controle.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/radio-group
 * @status stable
 * @since 0.6
 *
 * @dependency cps-button-group
 *
 * @slot - O _slot_ padrão onde elementos `<cps-radio>` ou `<cps-toggle-button>` são colocados.
 * @slot label - Rótulo informativo do campo. Obrigatório para acessibilidade adequada. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 * @slot help-text - Texto de apoio para auxílio ao preenchimento do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `help-text`.
 *
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada pelo usuário.
 * @event cps-input - Emitido quando o controle recebe entrada de dados.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @csspart form-control - O agrupamento de controle de formulário que engloba todos os elementos, como rótulo, caixa de entrada, e texto de apoio.
 * @csspart form-control-label - Elemento que embrulha o rótulo do controle de formulário.
 * @csspart form-control-input - Elemento que embrulha o campo do controle de formulário.
 * @csspart form-control-help-text - Elemento que embrulha o texto de apoio do controle de formulário.
 * @csspart button-group - O componente de grupo de botões que embrulha botões alternáveis (um `<cps-button-group>`).
 * @csspart button-group__base - A parte `base` re-exportada do grupo de botões.
 */
@customElement('cps-radio-group')
export default class CpsRadioGroup extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  protected readonly formControlController = new FormControlController(this);
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private customValidityMessage = '';
  private validationTimeout: number;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.radio-group__validation-input') validationInput: HTMLInputElement;

  @state() private hasButtonGroup = false;
  @state() private errorMessage = '';
  @state() private generatedId = '';
  @state() defaultValue = '';

  /**
   * O identificador único do campo, usado como estratégia de vinculação ao rótulo e/ou texto de apoio anexado.
   * Se não for fornecido, um UUID é gerado automaticamente.
   */
  @property() id = '';

  /** O rótulo do campo. Obrigatório para acessibilidade adequada. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text` em vez disso. */
  @property({ attribute: 'help-text' }) helpText = '';

  /**
   * O nome do campo, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property() name = 'option';

  /**
   * O valor do campo, submetido em par _name_/_value_ com os dados do formulário.
   */
  @property({ reflect: true }) value = '';

  /** O tamanho do campo. Este tamanho será aplicado a todos os elementos filhos `<cps-radio>` ou `<cps-toggle-button>`. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * O formulário "dono" deste controle de formulário. Se não informado, o formulário mais próximo na hierarquia
   * até este elemento será utilizado. Se informado, o valor deve ser um `id` único de um formulário
   * existente no documento.
   */
  @property({ reflect: true }) form = '';

  /** Torna o campo como sendo de preenchimento obrigatório, garantindo que um `<cps-radio>` ou um `<cps-toggle-button>` internos esteja marcado. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Obtém o objeto de estado de validade do campo. */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }

    return validValidityState;
  }

  /** Obtém a mensagem de validação do campo. */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }

    return '';
  }

  @watch('id')
  handleIdChange() {
    this.generatedId = uuid(this.id);
  }

  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private getAllRadios() {
    return [...this.querySelectorAll<CpsRadio | CpsToggleButton>('cps-radio, cps-toggle-button')];
  }

  private handleRadioClick(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest<CpsRadio | CpsToggleButton>('cps-radio, cps-toggle-button')!;
    const radios = this.getAllRadios();
    const oldValue = this.value;

    if (target.disabled) {
      return;
    }

    this.value = target.value;
    radios.forEach(radio => (radio.checked = radio === target));

    if (this.value !== oldValue) {
      this.emit('cps-change', { detail: { value: this.value } });
      this.emit('cps-input');
      this.formControlController.updateValidity(true);
      this.updateComplete.then(() => this.adjustFocusableRadios());
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(event.key)) {
      return;
    }

    const radios = this.getAllRadios().filter(radio => !radio.disabled);
    const checkedRadio = radios.find(radio => radio.checked) ?? radios[0];
    const incr = event.key === ' ' ? 0 : ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;

    if (index < 0) {
      index = radios.length - 1;
    }

    if (index > radios.length - 1) {
      index = 0;
    }

    this.getAllRadios().forEach(radio => {
      radio.checked = false;

      if (!this.hasButtonGroup) {
        radio.tabIndex = -1;
      }
    });

    this.value = radios[index].value;
    radios[index].checked = true;

    if (!this.hasButtonGroup) {
      radios[index].tabIndex = 0;
      radios[index].focus();
    } else {
      radios[index].shadowRoot!.querySelector('button')!.focus();
    }

    if (this.value !== oldValue) {
      this.emit('cps-change', { detail: { value: this.value } });
      this.emit('cps-input');
      this.formControlController.updateValidity(true);
      this.updateComplete.then(() => this.adjustFocusableRadios());
    }

    event.preventDefault();
  }

  private handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find(radio => radio.checked);
    const radioToFocus = checked || radios[0];

    // Move focus to the checked radio (or the first one if none are checked) when clicking the label
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private adjustFocusableRadios() {
    if (customElements.get('cps-radio') || customElements.get('cps-toggle-button')) {
      const radios = this.getAllRadios();

      for (const radio of radios) {
        const buttonPart = radio.shadowRoot?.querySelector<HTMLButtonElement>('[part~="button"]');

        if (buttonPart) {
          buttonPart.tabIndex = radio.disabled || radio.value === this.value ? -1 : 0;
        }
      }
    }
  }

  private syncRadios() {
    if (customElements.get('cps-radio') || customElements.get('cps-toggle-button')) {
      const radios = this.getAllRadios();

      // Sync the checked state and size
      radios.forEach(radio => {
        radio.checked = radio.value === this.value;
        radio.size = this.size;

        const buttonPart = radio.shadowRoot?.querySelector<HTMLButtonElement>('[part="button"]');

        if (buttonPart) {
          buttonPart.tabIndex = radio.disabled || radio.checked ? -1 : 0;
          radio.classList.toggle('cps-button-group__button--radio', true);
        }
      });

      this.hasButtonGroup = radios.some(radio => radio.tagName.toLowerCase() === 'cps-toggle-button');

      if (!radios.some(radio => radio.checked)) {
        if (this.hasButtonGroup) {
          const buttonRadio = radios[0].shadowRoot?.querySelector('button');

          if (buttonRadio) {
            buttonRadio.tabIndex = 0;
          }
        } else {
          radios[0].tabIndex = 0;
        }
      }

      if (this.hasButtonGroup) {
        const buttonGroup = this.shadowRoot?.querySelector('cps-button-group');

        if (buttonGroup) {
          buttonGroup.disableRole = true;
        }
      }
    } else {
      // Rerun this handler when <cps-radio> or <cps-toggle-button> is registered
      customElements.whenDefined('cps-radio').then(() => this.syncRadios());
      customElements.whenDefined('cps-toggle-button').then(() => this.syncRadios());
    }
  }

  private updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach(radio => (radio.checked = radio.value === this.value));
    this.formControlController.setValidity(this.validity.valid);
  }

  @watch('size', { waitUntilFirstUpdate: true })
  handleSizeChange() {
    this.syncRadios();
  }

  @watch('value')
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }

  /** Verifica a validade em um formulário, sem exibir uma mensagem de validação. Retorna `true` quando válido, e `false` quando inválido. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== '';

    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }

    return true;
  }

  /** Obtém o formulário associado com este componente, se algum estiver. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Verifica a validade em um formulário, e exibe as mensagem de validação do navegador caso o resultado seja inválido. */
  reportValidity(): boolean {
    const isValid = this.validity.valid;

    this.errorMessage = this.customValidityMessage || isValid ? '' : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);

    if (!isValid) {
      // Show the browser's constraint validation message
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => (this.validationInput.hidden = true), 10000) as unknown as number;
    }

    return isValid;
  }

  /** Define uma mensagem de validação personalizada. Passar uma `string` vazia como argumento restaura a validade do elemento. */
  setCustomValidity(message = '') {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    const defaultSlot = html`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;

    return html`
      <fieldset
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--radio-group': true,
          'form-control--has-label': hasLabel,
          'form-control--has-help-text': hasHelpText
        })}
        role="radiogroup"
        aria-labelledby=${`${this.generatedId}-label`}
        aria-describedby=${`${this.generatedId}-help-text`}
        aria-errormessage=${`${this.generatedId}-error-message`}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id=${`${this.generatedId}-error-message`} aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                id=${this.generatedId}
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup
            ? html`
                <cps-button-group part="button-group" exportparts="base:button-group__base">
                  ${defaultSlot}
                </cps-button-group>
              `
            : defaultSlot}
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
      </fieldset>
    `;
    /* eslint-enable lit-a11y/click-events-have-key-events */
  }
}

export { CpsRadioGroup };

declare global {
  interface HTMLElementTagNameMap {
    'cps-radio-group': CpsRadioGroup;
  }
}
