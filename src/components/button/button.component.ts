import '../icon.js';
import '../spinner.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { FormControlController, validValidityState } from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './button.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Botões representam ações que estão disponíveis ao usuário.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/button
 * @status stable
 * @since 0.1
 *
 * @dependency cps-icon
 * @dependency cps-spinner
 *
 * @event cps-blur - Emitido quando o botão perde o foco.
 * @event cps-focus - Emitido quando o botão obtém o foco.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @slot - O texto interno do botão.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot suffix - Um ícone ou elemento similar após o conteúdo principal.
 *
 * @csspart base - O elemento principal propriamente dito (que pode ser `<button>` ou `<a>`).
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart content - O elemento que embrulha o conteúdo principal, normalmente o _label_ do botão.
 * @csspart suffix - O elemento que embrulha a renderização do _slot_ `suffix`.
 * @csspart caret - O elemento de sinalização de menu, normalmente um `<cps-icon>` com o ícone de circunflexo para baixo.
 */
@customElement('cps-button')
export default class CpsButton extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    form: input => {
      // Buttons support a form attribute that points to an arbitrary form, so if this attribute is set we need to query
      // the form from the same root using its id
      if (input.hasAttribute('form')) {
        const doc = input.getRootNode() as Document | ShadowRoot;
        const formId = input.getAttribute('form')!;
        return doc.getElementById(formId) as HTMLFormElement;
      }

      // Fall back to the closest containing form
      return input.closest('form');
    },
    assumeInteractionOn: ['click']
  });

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');
  private readonly localize = new LocalizeController(this);

  @query('.button') button: HTMLButtonElement | HTMLAnchorElement;

  @state() private isFocused = false;
  @state() invalid = false;

  /* Um valor vazio previne que as dicas de validação do navegador apareçam ao passar o mouse. */
  @property() title = '';

  /** A variante visual para apresentação do botão. */
  @property({ reflect: true }) variant: 'default' | 'accent' | 'transparent' = 'default';

  /** O tamanho do botão. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Apresenta um sinalizador de menu ao final do botão. Usado para indicar que o botão dispara um menu de contexto ou algum comportamento similar. */
  @property({ type: Boolean, reflect: true }) caret = false;

  /** Desabilita o botão. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Apresenta o botão em estado de carregamento. */
  @property({ type: Boolean, reflect: true }) waiting = false;

  /** Arredondamento dos cantos do botão, com o padrão sendo bordas arredondas em `4px`. */
  @property({ reflect: true }) rounded: 'default' | 'corner' | 'full' = 'default';

  /**
   * O tipo do botão. Observe que o valor padrão é `button` ao invés de `submit`, o oposto de como um
   * `<button>` nativo se comporta. Quando `submit`, o botão auto-submete o `<form>` em que estiver contido.
   */
  @property() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * O nome do botão, submetido em par _name_/_value_ com os dados do formulário,
   * somente se este botão for o submissor. Ignorado quando `href` está presente.
   */
  @property() name = '';

  /**
   * O valor do botão, submetido em par _name_/_value_ com os dados do formulário,
   * somente se este botão for o submissor. Ignorado quando `href` está presente.
   */
  @property() value = '';

  /** Quando definido, o botão será renderizado como um elemento `<a>` com este `href` definido, ao invés de um elemento `<button>`. */
  @property() href = '';

  /** Informa o navegador qual o alvo de abertura do _link_. Usado somente se `href` estiver presente. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  /**
   * Quando usando `href`, este atributo irá mapear o valor do atributo `rel` subjacente com o valor
   * padrão `noreferrer noopener`, por questões de segurança. No entanto, se você estiver usando `target`
   * para apontar para uma guia/janela específica, isso impedirá que ele funcione corretamente.
   * Para este cenário específico, defina como vazio ou altere o valor de `rel` para outro valor.
   */
  @property() rel = 'noreferrer noopener';

  /** Informa o navegador para baixar o arquivo vinculado, com o nome definido aqui. Usado somente se `href` estiver presente. */
  @property() download?: string;

  /**
   * O formulário "dono" deste botão. Se não informado, o formulário mais próximo na hierarquia
   * até este botão será utilizado. Se informado, o valor deve ser um `id` único de um formulário
   * existente no documento.
   */
  @property() form: string;

  /** Usado para sobrescrever o atributo `action` do formulário "dono" deste botão. */
  @property({ attribute: 'formaction' }) formAction: string;

  /** Usado para sobrescrever o atributo `enctype` do formulário "dono" deste botão. */
  @property({ attribute: 'formenctype' })
  formEnctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

  /** Usado para sobrescrever o atributo `method` do formulário "dono" deste botão. */
  @property({ attribute: 'formmethod' }) formMethod: 'post' | 'get';

  /** Usado para sobrescrever o atributo `novalidate` do formulário "dono" deste botão. */
  @property({ attribute: 'formnovalidate', type: Boolean }) formNoValidate: boolean;

  /** Usado para sobrescrever o atributo `target` do formulário "dono" deste botão. */
  @property({ attribute: 'formtarget' }) formTarget: '_self' | '_blank' | '_parent' | '_top' | string;

  /** Obtém o objeto de estado de validade do botão. */
  get validity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).validity;
    }

    return validValidityState;
  }

  /** Obtém a mensagem de validação do botão. */
  get validationMessage() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).validationMessage;
    }

    return '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener('click', this.handleHostClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleHostClick);
  }

  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }

  private handleBlur() {
    this.isFocused = false;
    this.emit('cps-blur');
  }

  private handleFocus() {
    this.isFocused = true;
    this.emit('cps-focus');
  }

  private handleClick() {
    if (this.type === 'submit') {
      this.formControlController.submit(this);
    }

    if (this.type === 'reset') {
      this.formControlController.reset(this);
    }
  }

  private handleHostClick(event: MouseEvent) {
    // Prevent the click event from being emitted when the button is disabled or waiting
    if (this.disabled || this.waiting) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private isButton() {
    return this.href ? false : true;
  }

  private isLink() {
    return this.href ? true : false;
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.isButton()) {
      // Disabled form controls are always valid
      this.formControlController.setValidity(this.disabled);
    }
  }

  /** Simula um _click_ no botão. */
  click() {
    this.button.click();
  }

  /** Coloca o foco no botão. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Remove o foco do botão. */
  blur() {
    this.button.blur();
  }

  /** Verifica a validade em um formulário, sem exibir uma mensagem de validação. Retorna `true` quando válido, e `false` quando inválido. */
  checkValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).checkValidity();
    }

    return true;
  }

  /** Obtém o formulário associado com este componente, se algum estiver. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Verifica a validade em um formulário, e exibe as mensagem de validação do navegador caso o resultado seja inválido. */
  reportValidity() {
    if (this.isButton()) {
      return (this.button as HTMLButtonElement).reportValidity();
    }

    return true;
  }

  /** Define uma mensagem de validação personalizada. Passar uma `string` vazia como argumento restaura a validade do elemento. */
  setCustomValidity(message: string) {
    if (this.isButton()) {
      (this.button as HTMLButtonElement).setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          button: true,
          'button--default': this.variant === 'default',
          'button--accent': this.variant === 'accent',
          'button--transparent': this.variant === 'transparent',
          'button--small': this.size === 'small',
          'button--medium': this.size === 'medium',
          'button--large': this.size === 'large',
          'button--caret': this.caret,
          'button--circle': this.rounded === 'full',
          'button--corner': this.rounded === 'corner',
          'button--disabled': this.disabled,
          'button--focused': this.isFocused,
          'button--waiting': this.waiting,
          'button--rtl': this.localize.dir() === 'rtl',
          'button--has-label': this.hasSlotController.test('[default]'),
          'button--has-prefix': this.hasSlotController.test('prefix'),
          'button--has-suffix': this.hasSlotController.test('suffix')
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : this.type)}
        title=${this.title}
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink ? this.rel : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="content" class="button__content"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${
          this.caret
            ? html` <cps-icon part="caret" class="button__caret" library="system" name="caret"></cps-icon> `
            : ''
        }
        ${this.waiting ? html`<cps-spinner></cps-spinner>` : ''}
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }
}

export { CpsButton };

declare global {
  interface HTMLElementTagNameMap {
    'cps-button': CpsButton;
  }
}
