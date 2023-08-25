import './chip.js';
import './flyout.js';
import './icon-button.js';
import './icon.js';
import { animateTo, stopAnimations } from '../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../internal/default-value.js';
import { FormControlController } from '../internal/form.js';
import { getAnimation, setDefaultAnimation } from '../utilities/animation-registry.js';
import { HasSlotController } from '../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../utilities/localize.js';
import { scrollIntoView } from '../internal/scroll.js';
import { uuid } from '../internal/uuid.js';
import { waitForEvent } from '../internal/event.js';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './select/select.styles.js';
import type { BaseFormControl } from '../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';
import type CpsFlyout from './flyout.js';
import type CpsLabel from './label.js';
import type CpsOption from './option.js';
import type CpsRemoveEvent from '../events/cps-remove.js';

/**
 * @summary Caixas de seleção permitem escolher itens de um menu de opções predefinidas.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/select
 * @status stable
 * @since 0.8
 *
 * @dependency cps-icon
 * @dependency cps-icon-button
 * @dependency cps-flyout
 * @dependency cps-chip
 *
 * @slot - As opções da lista suspensa. Cada opção deve ser um `<cps-option>`. Opcionalmente, também pode conter `<cps-separator>` e `<cps-label>` para agrupar itens visualmente.
 * @slot label - Rótulo informativo do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `label`.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot expand-icon - Indicador que demonstra se o controle está expandido ou contraído (idealmente, um `<cps-icon>`). Se rotaciona de acordo com a abertura e o fechamento da lista suspensa.
 * @slot help-text - Texto de apoio para auxílio ao preenchimento do campo. Caso a injeção de conteúdos complexos não seja necessária, alternativamente utilize apenas o atributo `help-text`.
 *
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada pelo usuário.
 * @event cps-clear - Emitido quando o botão de limpar é ativado (caso `clearable` esteja em uso).
 * @event cps-input - Emitido quando o controle recebe entrada de dados.
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-show - Emitido quando a lista suspensa de opções começa a ser exibida.
 * @event cps-after-show - Emitido após a lista suspensa de opções ser exibida e todas as animações terem sido concluídas.
 * @event cps-hide - Emitido quando a lista suspensa de opções começa a ser ocultada.
 * @event cps-after-hide - Emitido após a lista suspensa de opções ser ocultada e todas as animações terem sido concluídas.
 * @event cps-invalid - Emitido quando o elemento de formulário foi checado sobre sua validade, e suas condições não foram satisfeitas.
 *
 * @csspart form-control - O agrupamento de controle de formulário que engloba todos os elementos, como rótulo, caixa de entrada, e texto de apoio.
 * @csspart form-control-label - Elemento que embrulha o rótulo do controle de formulário.
 * @csspart form-control-input - Elemento que embrulha o campo do controle de formulário.
 * @csspart form-control-help-text - Elemento que embrulha o texto de apoio do controle de formulário.
 * @csspart field - O elemento base que embrulha o campo de entrada de dados, o ícone de expansão, e eventuais prefixo e botão de limpar.
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart input - O controle interno propriamente dito (um `<input>`), o qual apresenta o texto da opção atualmente selecionada, ou um eventual _placeholder_.
 * @csspart menu - O elemento base que embrulha o menu contextual (um `<div>`), onde as opções injetadas são posicionadas.
 * @csspart chips - O elemento que embrulha a lista de _chips_ (um `<div>`), renderizado no lugar da parte `input`, quando `multiselect` está em uso.
 * @csspart chip - Cada etiqueta individual (um `<cps-chip>`), que representa uma opção selecionada, quando `multiselect` está em uso.
 * @csspart chip__base - A parte `base` re-exportada de cada _chip_ de seleção múltipla.
 * @csspart chip__content - A parte `content` re-exportada de cada _chip_ de seleção múltipla.
 * @csspart chip__remove-button - O botão de remoção re-exportado de cada _chip_ de seleção múltipla.
 * @csspart chip__remove-button__base - A parte `base` re-exportada do botão de remoção de cada _chip_ de seleção múltipla.
 * @csspart chip__remove-button__icon - A parte `icon` re-exportada do botão de remoção de cada _chip_ de seleção múltipla.
 * @csspart clear-button - O botão de limpar o campo (caso `clearable` esteja em uso).
 * @csspart clear-button__base - A parte `base` re-exportada do botão de limpar.
 * @csspart clear-button__icon - A parte `icon` re-exportada do botão de limpar.
 * @csspart expand-icon - O elemento que embrulha a renderização do _slot_ `expand-icon`.
 *
 * @animation select.show - A animação a ser usada ao exibir a lista de opções.
 * @animation select.hide - A animação a ser usada ao ocultar a lista de opções.
 */
@customElement('cps-select')
export default class CpsSelect extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['cps-blur', 'cps-input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private readonly localize = new LocalizeController(this);
  private typeToSelectString = '';
  private typeToSelectTimeout: number;

  @query('.select') flyout: CpsFlyout;
  @query('.select__field') field: HTMLSlotElement;
  @query('.select__display-input') displayInput: HTMLInputElement;
  @query('.select__value-input') valueInput: HTMLInputElement;
  @query('.select__menu') menu: HTMLSlotElement;

  @state() private hasFocus = false;
  @state() private generatedId = '';
  @state() displayLabel = '';
  @state() currentOption: CpsOption;
  @state() selectedOptions: CpsOption[] = [];

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
   * Quando `multiple` é habilitado, o valor será uma lista de valores delimitados por espaço com base nas opções selecionadas.
   */
  @property({
    converter: {
      fromAttribute: (value: string) => value.split(' '),
      toAttribute: (value: string[]) => value.join(' ')
    }
  })
  value: string | string[] = '';

  /** O valor padrão do controle de formulário. Usado principalmente para redefinir o campo. */
  @defaultValue() defaultValue: string | string[] = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Texto de espaço reservado para exibir uma dica quando o campo estiver vazio. */
  @property() placeholder = '';

  /** Habilita a possibilidade de selecionar mais de uma opção. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /**
   * O número máximo de opções selecionadas a serem exibidas no campo principal, quando `multiple` é usado.
   * Após o limite, apresenta um _chip_ exibindo `+n` (sendo `n` o número de opções selecionadas mas não exibidas).
   * O valor padrão é `0`, e significa nenhum limite (todas as opções selecionadas são exibidas).
   */
  @property({ attribute: 'max-options-visible', type: Number }) maxOptionsVisible = 0;

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Adiciona um botão de limpar exibido quando o campo não estiver vazio. */
  @property({ type: Boolean }) clearable = false;

  /**
   * Indica se o menu de seleção de opções está aberto. Você pode alternar este atributo, manualmente ou reativamente, para mostrar e ocultar o menu. Opcionalmente, pode utilizar os métodos `show()` e `hide()` se preferir uma abordagem imperativa, e este atributo refletirá o estado aberto do menu em tempo real.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Estratégia a nível de CSS do posicionamento do menu. A estratégia `absolute` funciona bem na maioria dos casos, mas se rolagem externa causar o corte do menu (se um elemento pai for `overflow` igual a `auto` ou `scroll`), usar uma estratégia de posição `fixed` pode contornar o problema. Entretanto, posicionamento fixo pode não funcionar em todos os cenários, portanto deve ser habilitado apenas quando necessário, e testado com atenção.
   */
  @property({ reflect: true }) strategy: 'absolute' | 'fixed' = 'absolute';

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label` em vez disso. */
  @property() label = '';

  /** O posicionamento preferido do menu de seleção em relação ao campo base. Observe que o posicionamento real poderá variar, se o posicionamento desejado não for viável, no intuito de manter o painel dentro da área de visualização. */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text` em vez disso. */
  @property({ attribute: 'help-text' }) helpText = '';

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
    return this.valueInput.validity;
  }

  /** Obtém a mensagem de validação do campo. */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  @watch('id')
  handleIdChange() {
    this.generatedId = uuid(this.id);
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentFocusIn = this.handleDocumentFocusIn.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    // Because this is a form control, it shouldn't be opened initially
    this.open = false;
  }

  private addOpenListeners() {
    document.addEventListener('focusin', this.handleDocumentFocusIn);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('focusin', this.handleDocumentFocusIn);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  private handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit('cps-focus');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('cps-blur');
  }

  private handleDocumentFocusIn(event: KeyboardEvent) {
    // Close when focusing out of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest('.select__clear') !== null;
    const isIconButton = target.closest('cps-icon-button') !== null;

    // Ignore presses when the target is an icon button (e.g. the remove button in <cps-chip>)
    if (isClearButton || isIconButton) {
      return;
    }

    // Close when pressing escape
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
      this.displayInput.focus({ preventScroll: true });
    }

    // Handle enter and space. When pressing space, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === 'Enter' || (event.key === ' ' && this.typeToSelectString === '')) {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        return;
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.currentOption.disabled) {
        if (this.multiple) {
          this.toggleOptionSelection(this.currentOption);
        } else {
          this.setSelectedOptions(this.currentOption);
        }

        // Emit after updating
        this.updateComplete.then(() => {
          this.formControlController.updateValidity(true);
          this.emit('cps-input');
          this.emit('cps-change');
        });

        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }

      return;
    }

    const enabledOptions = this.getAllOptions().filter(item => !item.disabled);

    // Navigate options
    if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      // Prevent scrolling
      event.preventDefault();

      // Open it
      if (!this.open) {
        this.show();

        // If an option is already selected, stop here because we want that one to remain highlighted when the menu
        // opens for the first time
        if (this.currentOption) {
          return;
        }
      }

      if (enabledOptions.length > 1) {
        const currentIndex = enabledOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        let isFocusableItem = false;

        while (!isFocusableItem) {
          if (event.key === 'ArrowDown') {
            newIndex = currentIndex + 1;
            if (newIndex > enabledOptions.length - 1) newIndex = 0;
          } else if (event.key === 'ArrowUp') {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = enabledOptions.length - 1;
          } else if (event.key === 'Home') {
            newIndex = 0;
          } else if (event.key === 'End') {
            newIndex = enabledOptions.length - 1;
          }

          if (!enabledOptions[newIndex].disabled) {
            isFocusableItem = true;
          }
        }

        this.setCurrentOption(enabledOptions[newIndex]);
      }
    }

    // All other "printable" keys trigger type to select
    if (event.key.length === 1 || event.key === 'Backspace') {
      // Don't block important key combos like CMD+R
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      // Open, unless the key that triggered is backspace
      if (!this.open) {
        if (event.key === 'Backspace') {
          return;
        }

        this.show();
      }

      event.stopPropagation();
      event.preventDefault();

      clearTimeout(this.typeToSelectTimeout);
      this.typeToSelectTimeout = window.setTimeout(() => (this.typeToSelectString = ''), 1000);

      if (event.key === 'Backspace') {
        this.typeToSelectString = this.typeToSelectString.slice(0, -1);
      } else {
        this.typeToSelectString += event.key.toLowerCase();
      }

      for (const option of enabledOptions) {
        const label = option.getTextLabel().toLowerCase();

        if (label.startsWith(this.typeToSelectString)) {
          this.setCurrentOption(option);
          break;
        }
      }
    }
  }

  private handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  }

  private handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isIconButton = path.some(el => el instanceof Element && el.tagName.toLowerCase() === 'cps-icon-button');

    // Ignore disabled controls and clicks on chips (remove buttons)
    if (this.disabled || isIconButton) {
      return;
    }

    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.value !== '') {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });

      // Emit after update
      this.updateComplete.then(() => {
        this.formControlController.updateValidity(true);
        this.emit('cps-clear');
        this.emit('cps-input');
        this.emit('cps-change');
      });
    }
  }

  private handleClearMouseDown(event: MouseEvent) {
    // Don't lose focus or propagate events when clicking the clear button
    event.stopPropagation();
    event.preventDefault();
  }

  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest('cps-option');
    const oldValue = this.value;

    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.formControlController.updateValidity(true);
          this.emit('cps-input');
          this.emit('cps-change', { detail: { option } });
        });
      }

      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }

  private handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const allLabels = this.getAllLabels();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values: string[] = [];

    // Update options role if multiple
    if (this.multiple) {
      allOptions.forEach(el => (el.type = 'checkbox'));
    }

    // Ensure all labels have proper appearance
    allLabels.forEach(el => {
      el.size = 'label';
      el.variant = 'secondary';
    });

    // Check for duplicate values in menu items
    if (customElements.get('cps-option')) {
      allOptions.forEach(option => values.push(option.value));

      // Select only the options that match the new value
      this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
    } else {
      // Rerun this handler when <cps-option> is registered
      customElements.whenDefined('cps-option').then(() => this.handleDefaultSlotChange());
    }
  }

  private handleTagRemove(event: CpsRemoveEvent, option: CpsOption) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggleOptionSelection(option, false);

      // Emit after updating
      this.updateComplete.then(() => {
        this.formControlController.updateValidity(true);
        this.emit('cps-input');
        this.emit('cps-change');
      });
    }
  }

  // Gets an array of all <cps-label> elements
  private getAllLabels() {
    return [...this.querySelectorAll<CpsLabel>('cps-label')];
  }

  // Gets an array of all <cps-option> elements
  private getAllOptions() {
    return [...this.querySelectorAll<CpsOption>('cps-option')];
  }

  // Gets the first <cps-option> element
  private getFirstOption() {
    return this.querySelector<CpsOption>('cps-option');
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option: CpsOption | null) {
    const allOptions = this.getAllOptions();

    // Clear selection
    allOptions.forEach(el => {
      el.current = false;
      el.tabIndex = -1;
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(option: CpsOption | CpsOption[]) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];

    // If multi-selection is allowed
    if (this.multiple) {
      // Update multi-selection capability on each item
      allOptions.forEach(el => (el.selected = false));

      // Set the new selection
      if (newSelectedOptions.length) {
        newSelectedOptions.forEach(el => (el.selected = true));
      }
    } else {
      // Clear existing selection
      allOptions.forEach(el => (el.selected = false));

      // Set the new selection
      if (newSelectedOptions.length) {
        newSelectedOptions.forEach(el => (el.selected = true));
      }
    }

    // Update selection, value, and display label
    this.selectionChanged();
  }

  // Toggles an option's selected state
  private toggleOptionSelection(option: CpsOption, force?: boolean) {
    if (force !== undefined) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }

    this.setCurrentOption(option);
    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllOptions().filter(el => el.selected);

    // Update the value and display label
    if (this.multiple) {
      this.value = this.selectedOptions.map(el => el.value);

      if (this.placeholder && this.value.length === 0) {
        // When no items are selected, keep the value empty so the placeholder shows
        this.displayLabel = '';
      } else {
        this.displayLabel = this.localize.term('numOptionsSelected', this.selectedOptions.length);
      }
    } else {
      this.value = this.selectedOptions[0]?.value ?? '';
      this.displayLabel = this.selectedOptions[0]?.getTextLabel() ?? '';
    }

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the menu when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      // Reset the current option
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());

      // Show
      this.emit('cps-show');
      this.addOpenListeners();

      await stopAnimations(this);
      this.menu.hidden = false;
      this.flyout.active = true;

      // Select the appropriate option based on value after the menu opens
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });

      const { keyframes, options } = getAnimation(this, 'select.show', { dir: this.localize.dir() });
      await animateTo(this.flyout.container, keyframes, options);

      // Make sure the current option is scrolled into view (required for Safari)
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.menu, 'vertical', 'auto');
      }

      this.emit('cps-after-show');
    } else {
      // Hide
      this.emit('cps-hide');
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'select.hide', { dir: this.localize.dir() });
      await animateTo(this.flyout.container, keyframes, options);
      this.menu.hidden = true;
      this.flyout.active = false;

      this.emit('cps-after-hide');
    }
  }

  /** Exibe o menu seletor de opções. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'cps-after-show');
  }

  /** Oculta o menu seletor de opções. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'cps-after-hide');
  }

  /** Verifica a validade em um formulário, sem exibir uma mensagem de validação. Retorna `true` quando válido, e `false` quando inválido. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Obtém o formulário associado com este componente, se algum estiver. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Verifica a validade em um formulário, e exibe as mensagem de validação do navegador caso o resultado seja inválido. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }

  /** Define uma mensagem de validação personalizada. Passar uma `string` vazia como argumento restaura a validade do elemento. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Coloca o foco no campo. */
  focus(options?: FocusOptions) {
    this.displayInput.focus(options);
  }

  /** Remove o foco do campo. */
  blur() {
    this.displayInput.blur();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;

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
          <cps-flyout
            class=${classMap({
              select: true,
              'select--open': this.open,
              'select--disabled': this.disabled,
              'select--multiple': this.multiple,
              'select--focused': this.hasFocus,
              'select--placeholder-visible': isPlaceholderVisible,
              'select--top': this.placement === 'top',
              'select--bottom': this.placement === 'bottom',
              'select--small': this.size === 'small',
              'select--medium': this.size === 'medium',
              'select--large': this.size === 'large'
            })}
            placement=${this.placement}
            strategy=${this.strategy}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
            distance="10"
          >
            <div
              part="field"
              class="select__field"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="input"
                id=${this.generatedId}
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls=${`${this.generatedId}-menu`}
                aria-expanded=${this.open ? 'true' : 'false'}
                aria-haspopup="true"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? 'true' : 'false'}
                aria-describedby=${hasHelpText ? `${this.generatedId}-help-text` : undefined}
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple
                ? html`
                    <div part="chips" class="select__chips">
                      ${this.selectedOptions.map((option, index) => {
                        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
                          return html`
                            <cps-chip
                              part="chip"
                              exportparts="
                                base:chip__base,
                                content:chip__content,
                                remove-button:chip__remove-button,
                                remove-button__base:chip__remove-button__base
                                remove-button__icon:chip__remove-button__icon
                              "
                              size=${this.size}
                              ?removable=${!this.disabled}
                              @cps-remove=${(event: CpsRemoveEvent) => this.handleTagRemove(event, option)}
                            >
                              ${option.getTextLabel()}
                            </cps-chip>
                          `;
                        } else if (index === this.maxOptionsVisible) {
                          return html`
                            <cps-chip part="chip" size=${this.size}> +${this.selectedOptions.length - index} </cps-chip>
                          `;
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  `
                : ''}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(', ') : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon
                ? html`
                    <cps-icon-button
                      part="clear-button"
                      exportparts="base:clear-button__base, icon:clear-button__icon"
                      name="dismiss"
                      library="system"
                      class="select__clear"
                      aria-label=${this.localize.term('clearEntry')}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      size=${this.size}
                    ></cps-icon-button>
                  `
                : ''}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <cps-icon library="system" name="caret"></cps-icon>
              </slot>
            </div>

            <div
              id=${`${this.generatedId}-menu`}
              role="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-multiselectable=${this.multiple ? 'true' : 'false'}
              aria-labelledby=${`${this.generatedId}-label`}
              part="menu"
              class="select__menu"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </cps-flyout>
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

setDefaultAnimation('select.show', {
  keyframes: [
    { opacity: 0, transform: 'scaleY(0.75)' },
    { opacity: 1, transform: 'scaleY(1)' }
  ],
  options: { duration: 150, easing: 'ease' }
});

setDefaultAnimation('select.hide', {
  keyframes: [
    { opacity: 1, transform: 'scaleY(1)' },
    { opacity: 0, transform: 'scaleY(0.85)' }
  ],
  options: { duration: 150, easing: 'ease' }
});

export { CpsSelect };

declare global {
  interface HTMLElementTagNameMap {
    'cps-select': CpsSelect;
  }
}
