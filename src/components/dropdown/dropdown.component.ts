import '../flyout.js';
import '../icon-button.js';
import '../icon.js';
import { animateTo, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { scrollIntoView } from '../../internal/scroll.js';
import { uuid } from '../../internal/uuid.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './dropdown.styles.js';
import type { CSSResultGroup } from 'lit';
import type CpsFlyout from '../flyout.js';
import type CpsLabel from '../label.js';
import type CpsOption from '../option.js';

/**
 * @summary Botões _dropdown_ permitem escolher itens de um menu de opções predefinidas.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/dropdown
 * @status stable
 * @since 0.10
 *
 * @dependency cps-icon
 * @dependency cps-icon-button
 * @dependency cps-flyout
 *
 * @slot - As opções da lista suspensa. Cada opção deve ser um `<cps-option>`. Opcionalmente, também pode conter `<cps-separator>` e `<cps-label>` para agrupar itens visualmente.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 * @slot expand-icon - Indicador que demonstra se o controle está expandido ou contraído (idealmente, um `<cps-icon>`). Se rotaciona de acordo com a abertura e o fechamento da lista suspensa.
 *
 * @event cps-change - Emitido quando a alteração do valor do controle é confirmada pelo usuário.
 * @event cps-clear - Emitido quando o botão de limpar é ativado (caso `clearable` esteja em uso).
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-show - Emitido quando a lista suspensa de opções começa a ser exibida.
 * @event cps-after-show - Emitido após a lista suspensa de opções ser exibida e todas as animações terem sido concluídas.
 * @event cps-hide - Emitido quando a lista suspensa de opções começa a ser ocultada.
 * @event cps-after-hide - Emitido após a lista suspensa de opções ser ocultada e todas as animações terem sido concluídas.
 *
 * @csspart field - O elemento base que embrulha o botão de ação, o ícone de expansão, e eventuais prefixo e botão de limpar.
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart span - A área textual interna (um `<span>`), a qual apresenta o texto da opção atualmente selecionada, ou um eventual _placeholder_.
 * @csspart menu - O elemento base que embrulha o menu contextual (um `<div>`), onde as opções injetadas são posicionadas.
 * @csspart clear-button - O botão de limpar o campo (caso `clearable` esteja em uso).
 * @csspart clear-button__base - A parte `base` re-exportada do botão de limpar.
 * @csspart clear-button__icon - A parte `icon` re-exportada do botão de limpar.
 * @csspart expand-icon - O elemento que embrulha a renderização do _slot_ `expand-icon`.
 *
 * @animation dropdown.show - A animação a ser usada ao exibir a lista de opções.
 * @animation dropdown.hide - A animação a ser usada ao ocultar a lista de opções.
 */
@customElement('cps-dropdown')
export default class CpsDropdown extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);
  private typeToSelectString = '';
  private typeToSelectTimeout: number;

  @query('.dropdown') flyout: CpsFlyout;
  @query('.dropdown__field') field: HTMLSlotElement;
  @query('.dropdown__display-span') displaySpan: HTMLSpanElement;
  @query('.dropdown__value-input') valueInput: HTMLInputElement;
  @query('.dropdown__menu') menu: HTMLSlotElement;

  @state() private hasFocus = false;
  @state() private generatedId = '';
  @state() displayText = '';
  @state() currentOption: CpsOption;
  @state() selectedOptions: CpsOption[] = [];

  /**
   * O identificador único do campo, usado como estratégia de vinculação ao rótulo e/ou texto de apoio anexado.
   * Se não for fornecido, um UUID é gerado automaticamente.
   */
  @property() id = '';

  /** O valor do campo, permite recuperar ou definir uma opção selecionada. */
  @property({ reflect: true }) value: string = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Texto de espaço reservado para exibir uma dica quando o campo estiver vazio. */
  @property() placeholder = '';

  /**
   * Define se o espaço reservado deve ser exibido permanentemente,
   * independentemente de uma opção estar selecionada.
   */
  @property({ type: Boolean, attribute: 'keep-placeholder' }) keepPlaceholder = false;

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

  /** O posicionamento preferido do menu de seleção em relação ao campo base. Observe que o posicionamento real poderá variar, se o posicionamento desejado não for viável, no intuito de manter o painel dentro da área de visualização. */
  @property({ reflect: true }) placement: 'top' | 'bottom' = 'bottom';

  @watch('id')
  handleIdChange() {
    this.generatedId = uuid(this.id);
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentFocusIn = this.handleDocumentFocusIn.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    // Because this is obtrusive when open, it shouldn't be opened initially
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
    const isClearButton = target.closest('.dropdown__clear') !== null;

    // Ignore presses when the target is the clear button
    if (isClearButton) {
      return;
    }

    // Close when pressing escape
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
      this.displaySpan.focus({ preventScroll: true });
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
        this.setSelectedOptions(this.currentOption);

        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('cps-change');
        });
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

  private handleTriggerMouseDown(event: MouseEvent) {
    event.preventDefault();
    if (this.disabled) return;
    this.displaySpan.focus({ preventScroll: true });
    this.open = !this.open;
  }

  private handleTriggerKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
    if (this.disabled) return;
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.value !== '') {
      this.setSelectedOptions([]);
      this.displaySpan.focus({ preventScroll: true });

      // Emit after update
      this.updateComplete.then(() => {
        this.emit('cps-clear');
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
      this.setSelectedOptions(option);

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displaySpan.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit('cps-change', { detail: { option } });
        });
      }

      this.hide();
      this.displaySpan.focus({ preventScroll: true });
    }
  }

  private handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const allLabels = this.getAllLabels();
    const value = this.value;
    const values: string[] = [];

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

    // Clear existing selection
    allOptions.forEach(el => (el.selected = false));

    // Set the new selection
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach(el => (el.selected = true));
    }

    // Update selection, value, and display text
    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllOptions().filter(el => el.selected);

    // Update the value and display text
    this.value = this.selectedOptions[0]?.value ?? '';

    // Update the display text
    if (this.keepPlaceholder) {
      this.displayText = this.placeholder ?? '';
    } else {
      this.displayText = this.selectedOptions[0]?.getTextLabel() ?? this.placeholder ?? '';
    }
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
    const value = this.value;

    // Select only the options that match the new value
    this.setSelectedOptions(allOptions.filter(el => value === el.value));
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

      const { keyframes, options } = getAnimation(this, 'dropdown.show', { dir: this.localize.dir() });
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
      const { keyframes, options } = getAnimation(this, 'dropdown.hide', { dir: this.localize.dir() });
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

  /** Coloca o foco no campo. */
  focus(options?: FocusOptions) {
    this.displaySpan.focus(options);
  }

  /** Remove o foco do campo. */
  blur() {
    this.displaySpan.blur();
  }

  render() {
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;

    return html`
      <cps-flyout
        class=${classMap({
          dropdown: true,
          'dropdown--open': this.open,
          'dropdown--disabled': this.disabled,
          'dropdown--focused': this.hasFocus,
          'dropdown--placeholder-visible': isPlaceholderVisible,
          'dropdown--top': this.placement === 'top',
          'dropdown--bottom': this.placement === 'bottom',
          'dropdown--small': this.size === 'small',
          'dropdown--medium': this.size === 'medium',
          'dropdown--large': this.size === 'large'
        })}
        placement=${this.placement}
        strategy=${this.strategy}
        flip
        shift
        sync="min-width"
        auto-size="vertical"
        auto-size-padding="10"
        distance="10"
      >
        <div
          part="field"
          class="dropdown__field"
          slot="anchor"
          @keydown=${this.handleTriggerKeyDown}
          @mousedown=${this.handleTriggerMouseDown}
        >
          <slot part="prefix" name="prefix" class="dropdown__prefix"></slot>

          <span
            part="span"
            id=${this.generatedId}
            class="dropdown__display-span"
            type="text"
            aria-controls=${`${this.generatedId}-menu`}
            aria-expanded=${this.open ? 'true' : 'false'}
            aria-haspopup="true"
            aria-labelledby="label"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            role="combobox"
            tabindex="0"
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          >
            ${this.displayText}
          </span>

          <input
            class="dropdown__value-input"
            type="text"
            ?disabled=${this.disabled}
            .value=${this.value}
            tabindex="-1"
            aria-hidden="true"
            @focus=${() => this.focus()}
          />

          ${hasClearIcon
            ? html`
                <cps-icon-button
                  part="clear-button"
                  exportparts="base:clear-button__base, icon:clear-button__icon"
                  name="dismiss"
                  library="system"
                  class="dropdown__clear"
                  aria-label=${this.localize.term('clearEntry')}
                  @mousedown=${this.handleClearMouseDown}
                  @click=${this.handleClearClick}
                  size=${this.size}
                ></cps-icon-button>
              `
            : ''}

          <slot name="expand-icon" part="expand-icon" class="dropdown__expand-icon">
            <cps-icon library="system" name="caret"></cps-icon>
          </slot>
        </div>

        <div
          id=${`${this.generatedId}-menu`}
          role="listbox"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-labelledby=${`${this.generatedId}-label`}
          part="menu"
          class="dropdown__menu"
          tabindex="-1"
          @mouseup=${this.handleOptionClick}
          @slotchange=${this.handleDefaultSlotChange}
        >
          <slot></slot>
        </div>
      </cps-flyout>
    `;
  }
}

setDefaultAnimation('dropdown.show', {
  keyframes: [
    { opacity: 0, transform: 'scaleY(0.75)' },
    { opacity: 1, transform: 'scaleY(1)' }
  ],
  options: { duration: 150, easing: 'ease' }
});

setDefaultAnimation('dropdown.hide', {
  keyframes: [
    { opacity: 1, transform: 'scaleY(1)' },
    { opacity: 0, transform: 'scaleY(0.85)' }
  ],
  options: { duration: 150, easing: 'ease' }
});

export { CpsDropdown };

declare global {
  interface HTMLElementTagNameMap {
    'cps-dropdown': CpsDropdown;
  }
}
