import '../flyout.js';
import { animateTo, stopAnimations } from '../../internal/animate.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './menu.styles.js';
import type { CSSResultGroup } from 'lit';
import type { VirtualElement } from '../flyout.js';
import type CpsFlyout from '../flyout.js';
import type CpsMenuItem from '../menu-item.js';

/**
 * @summary Menus oferecem uma lista de opções para o usuário escolher.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/menu
 * @status stable
 * @since 0.26
 *
 * @dependency cps-flyout
 *
 * @slot - Conteúdo do menu. Aceita qualquer elemento, mas tipicamente inclui itens de menu, rótulos de menu e separadores.
 * @slot anchor - Elemento que aciona a exibição do menu. Se presente, ativa o modo flutuante.
 *
 * @event cps-select - Emitido quando um item de menu interno é selecionado.
 * @event cps-show - Emitido quando o menu começa a abrir (apenas no modo flutuante).
 * @event cps-after-show - Emitido após o menu abrir e animações concluírem (apenas no modo flutuante).
 * @event cps-hide - Emitido quando o menu começa a fechar (apenas no modo flutuante).
 * @event cps-after-hide - Emitido após o menu fechar e animações concluírem (apenas no modo flutuante).
 *
 * @csspart body - O corpo do menu, onde seu conteúdo é renderizado.
 *
 * @cssproperty --max-height - A altura máxima do menu flutuante, antes que seu conteúdo seja rolável.
 *
 * @animation menu.show - A animação a ser usada ao exibir o menu flutuante.
 * @animation menu.hide - A animação a ser usada ao ocultar o menu flutuante.
 */
@customElement('cps-menu')
export default class CpsMenu extends BaseElement {
  static styles: CSSResultGroup = styles;

  private static openMenus = new Set<CpsMenu>();

  private readonly hasSlotController = new HasSlotController(this, 'anchor');
  private readonly localize = new LocalizeController(this);
  private hoverTimeout?: number;
  private virtualAnchor: VirtualElement | null = null;
  private wasOpenOnMouseDown = false;
  private boundHandleAnchorMouseDown: () => void;
  private boundHandleAnchorClick: (e: MouseEvent) => void;
  private boundHandleAnchorContextMenu: (e: MouseEvent) => void;
  private boundHandleAnchorMouseOver: () => void;
  private boundHandleAnchorMouseOut: (e: MouseEvent) => void;
  private boundHandleAnchorFocus: () => void;
  private boundHandleAnchorBlur: (e: FocusEvent) => void;
  private boundHandleDocumentContextMenu: (e: MouseEvent) => void;
  private boundHandleDocumentClick: (e: MouseEvent) => void;
  private boundHandleDocumentKeyDown: (e: KeyboardEvent) => void;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('slot[name="anchor"]') anchorSlot: HTMLSlotElement;
  @query('.menu__body') body: HTMLElement;
  @query('cps-flyout') flyout: CpsFlyout;

  @state() private anchorElement: HTMLElement | null = null;

  /**
   * Tipo de acionamento do menu flutuante. Múltiplos valores podem ser separados por espaço.
   * Quando `manual`, o menu deve ser controlado programaticamente.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property() trigger: string = 'click focus';

  /**
   * Posicionamento preferido do menu flutuante em relação à âncora.
   * Observe que o posicionamento real pode variar para manter o menu dentro da janela de visualização.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property() placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end' = 'bottom-start';

  /**
   * Distância em pixels do menu flutuante em relação à âncora.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property({ type: Number }) distance = 8;

  /**
   * Deslocamento lateral em pixels do menu flutuante.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property({ type: Number }) skidding = 0;

  /**
   * Sincroniza a largura ou altura (ou ambos) do menu flutuante com a do seu elemento âncora.
   * Útil para menus suspensos onde a largura deve corresponder ao botão ou campo de entrada.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property() sync: 'exact-width' | 'min-width' | 'exact-height' | 'min-height' | 'exact-both' | 'min-both';

  /**
   * Estado aberto/fechado do menu flutuante.
   * Você pode usar isso declarativamente e reativamente, ao invés de precisar dos métodos `show` e `hide`.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Habilite esta opção para que o menu flutuante seja exibido em um contêiner de nível superior
   * (usualmente, o `<body>`), ao invés de ser renderizado junto ao seu elemento âncora.
   *
   * Isso é útil quando você precisa exibir conteúdo que pode ser cortado por um contêiner pai que
   * tenha `overflow` `hidden`, `scroll` ou `auto`, ou quando você precisa exibir o menu
   * em um contêiner com um `z-index` menor que o do seu elemento alvo.
   *
   * Içar usa uma estratégia de posicionamento fixo que funciona em muitos cenários,
   * mas não em todos, então teste com cautela se precisar habilitar.
   *
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property({ type: Boolean }) hoist = false;

  /**
   * Se presente, desabilita o fechamento automático do menu ao selecionar um item.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property({ type: Boolean, attribute: 'no-auto-close' }) noAutoClose = false;

  /**
   * Desabilita o menu flutuante, impedindo que seja exibido quando ocorre interação com a âncora.
   * É útil para reativamente ou programaticamente interromper a exibição flutuante sem ter de remover o vínculo com a âncora.
   * Este atributo é ignorado quando não há elemento no _slot_ `anchor`.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();

    this.boundHandleAnchorMouseDown = this.handleAnchorMouseDown.bind(this);
    this.boundHandleAnchorClick = this.handleAnchorClick.bind(this);
    this.boundHandleAnchorContextMenu = this.handleAnchorContextMenu.bind(this);
    this.boundHandleAnchorMouseOver = this.handleAnchorMouseOver.bind(this);
    this.boundHandleAnchorMouseOut = this.handleAnchorMouseOut.bind(this);
    this.boundHandleAnchorFocus = this.handleAnchorFocus.bind(this);
    this.boundHandleAnchorBlur = this.handleAnchorBlur.bind(this);
    this.boundHandleDocumentContextMenu = this.handleDocumentContextMenu.bind(this);
    this.boundHandleDocumentClick = this.handleDocumentClick.bind(this);
    this.boundHandleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);

    this.updateComplete.then(() => {
      this.setupListeners();
    });
  }

  firstUpdated() {
    if (this.open && this.hasSlotController.test('anchor')) {
      if (this.body) this.body.hidden = false;
      if (this.flyout) {
        this.flyout.active = true;
        this.flyout.reposition();
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupListeners();
  }

  private setupListeners() {
    document.addEventListener('click', this.boundHandleDocumentClick);
    document.addEventListener('keydown', this.boundHandleDocumentKeyDown);

    if (this.hasTrigger('contextmenu') && !this.hasSlotController.test('anchor')) {
      document.addEventListener('contextmenu', this.boundHandleDocumentContextMenu);
    }
  }

  private cleanupListeners() {
    clearTimeout(this.hoverTimeout);

    document.removeEventListener('click', this.boundHandleDocumentClick);
    document.removeEventListener('keydown', this.boundHandleDocumentKeyDown);
    document.removeEventListener('contextmenu', this.boundHandleDocumentContextMenu);

    this.removeAnchorListeners();
  }

  private addAnchorListeners() {
    if (!this.anchorElement) return;

    this.anchorElement.addEventListener('mousedown', this.boundHandleAnchorMouseDown);
    this.anchorElement.addEventListener('click', this.boundHandleAnchorClick);

    if (this.hasTrigger('contextmenu')) {
      this.anchorElement.addEventListener('contextmenu', this.boundHandleAnchorContextMenu);
    }

    if (this.hasTrigger('hover')) {
      this.anchorElement.addEventListener('mouseover', this.boundHandleAnchorMouseOver);
      this.anchorElement.addEventListener('mouseout', this.boundHandleAnchorMouseOut);
    }

    if (this.hasTrigger('focus')) {
      this.anchorElement.addEventListener('focus', this.boundHandleAnchorFocus);
      this.anchorElement.addEventListener('blur', this.boundHandleAnchorBlur);
    }
  }

  private removeAnchorListeners() {
    if (!this.anchorElement) return;

    this.anchorElement.removeEventListener('mousedown', this.boundHandleAnchorMouseDown);
    this.anchorElement.removeEventListener('click', this.boundHandleAnchorClick);
    this.anchorElement.removeEventListener('contextmenu', this.boundHandleAnchorContextMenu);
    this.anchorElement.removeEventListener('mouseover', this.boundHandleAnchorMouseOver);
    this.anchorElement.removeEventListener('mouseout', this.boundHandleAnchorMouseOut);
    this.anchorElement.removeEventListener('focus', this.boundHandleAnchorFocus);
    this.anchorElement.removeEventListener('blur', this.boundHandleAnchorBlur);
  }

  private handleAnchorSlotChange() {
    this.removeAnchorListeners();

    const assignedElements = this.anchorSlot?.assignedElements({ flatten: true }) ?? [];
    this.anchorElement = assignedElements[0] as HTMLElement | null;

    if (this.anchorElement) {
      this.setAttribute('floating', '');
    } else {
      this.removeAttribute('floating');
    }

    this.addAnchorListeners();
  }

  private hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(' ');
    return triggers.includes(triggerType);
  }

  private createVirtualAnchorAtCursor(event: MouseEvent): VirtualElement {
    return {
      getBoundingClientRect: (): DOMRect => {
        const rect: DOMRect = {
          width: 0,
          height: 0,
          x: event.clientX,
          y: event.clientY,
          top: event.clientY,
          left: event.clientX,
          right: event.clientX,
          bottom: event.clientY,
          toJSON: () => ({})
        };
        return rect;
      }
    };
  }

  /** Gets the transform-origin based on placement for animations. */
  private getTransformOrigin(placement?: string): string {
    if (this.virtualAnchor) {
      return 'center';
    }

    const effectivePlacement = placement || this.placement;
    const [side] = effectivePlacement.split('-');

    switch (side) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      default:
        return 'top';
    }
  }

  private handleAnchorMouseDown() {
    this.wasOpenOnMouseDown = this.open;
  }

  private handleAnchorClick(event: MouseEvent) {
    if (this.disabled) return;

    if (this.trigger === 'manual') return;

    if (this.open) {
      if (this.wasOpenOnMouseDown) {
        event.preventDefault();
        this.hide();
      }
      return;
    }

    if (!this.hasTrigger('click') && !this.hasTrigger('focus') && !this.hasTrigger('hover')) return;

    event.preventDefault();
    this.virtualAnchor = null;
    this.show();
  }

  private handleAnchorContextMenu(event: MouseEvent) {
    if (this.disabled || !this.hasTrigger('contextmenu')) return;

    event.preventDefault();
    event.stopPropagation();

    this.virtualAnchor = this.createVirtualAnchorAtCursor(event);

    if (this.open) {
      this.open = false;
    }

    this.show();
  }

  private handleAnchorMouseOver() {
    if (this.disabled || !this.hasTrigger('hover')) return;

    clearTimeout(this.hoverTimeout);
    this.virtualAnchor = null;
    this.hoverTimeout = window.setTimeout(() => this.show(), 0);
  }

  private handleAnchorMouseOut(event: MouseEvent) {
    if (this.disabled || !this.hasTrigger('hover')) return;

    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (relatedTarget && this.body?.contains(relatedTarget)) {
      return;
    }

    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = window.setTimeout(() => this.hide(), 300);
  }

  private handleBodyMouseOver() {
    if (this.disabled || !this.hasTrigger('hover')) return;

    clearTimeout(this.hoverTimeout);
  }

  private handleBodyMouseOut(event: MouseEvent) {
    if (this.disabled || !this.hasTrigger('hover')) return;

    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (relatedTarget && this.anchorElement?.contains(relatedTarget)) {
      return;
    }

    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = window.setTimeout(() => this.hide(), 300);
  }

  private handleAnchorFocus() {
    if (this.disabled || !this.hasTrigger('focus')) return;

    this.virtualAnchor = null;
    this.show();
  }

  private handleAnchorBlur(event: FocusEvent) {
    if (this.disabled || !this.hasTrigger('focus')) return;

    const relatedTarget = event.relatedTarget as HTMLElement | null;
    if (relatedTarget && this.contains(relatedTarget)) {
      return;
    }

    this.hide();
  }

  private handleDocumentContextMenu(event: MouseEvent) {
    if (this.disabled || !this.hasTrigger('contextmenu') || this.hasSlotController.test('anchor')) return;

    const target = event.target as Element;
    if (target.closest('cps-menu [slot="anchor"], cps-menu[trigger*="contextmenu"] [slot="anchor"]')) return;

    event.preventDefault();

    for (const menu of CpsMenu.openMenus) {
      if (menu !== this) {
        menu.hide();
      }
    }

    this.virtualAnchor = this.createVirtualAnchorAtCursor(event);

    if (this.open) {
      this.open = false;
    }

    this.show();
  }

  private handleDocumentClick(event: MouseEvent) {
    if (!this.open || (!this.hasSlotController.test('anchor') && !this.hasTrigger('contextmenu'))) return;

    if (this.trigger === 'manual') return;

    const path = event.composedPath();
    if (!path.includes(this)) {
      this.hide();
    }
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    if (!this.open) return;

    if (event.key === 'Escape') {
      event.stopPropagation();
      this.hide();
    }
  }

  private handleInlineClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('cps-menu-item');

    if (!item || item.disabled || item.inert) {
      return;
    }

    if (item.type === 'checkbox') {
      item.checked = !item.checked;
    }

    this.emit('cps-select', { detail: { item } });
  }

  private handleFloatingClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const item = target.closest('cps-menu-item');

    if (!item || item.disabled || item.inert) {
      return;
    }

    if (item.type === 'checkbox') {
      item.checked = !item.checked;
    }

    this.emit('cps-select', { detail: { item } });

    if (!this.noAutoClose) {
      this.hide();
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const items = this.getAllItems().filter(item => !item.disabled);
    if (items.length === 0) return;

    const focusedElement = this.shadowRoot?.activeElement || document.activeElement;
    const isFocusOnBody = focusedElement === this.body || !this.isMenuItem(focusedElement);

    if (isFocusOnBody && ['Tab', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();

      let targetIndex = 0;
      if (event.key === 'ArrowUp' || event.key === 'End' || (event.key === 'Tab' && event.shiftKey)) {
        targetIndex = items.length - 1;
      }

      this.setCurrentItem(items[targetIndex]);
      items[targetIndex].focus();
      return;
    }

    if (event.key === 'Enter') {
      const item = this.getCurrentItem();
      event.preventDefault();

      item?.click();
    }

    if (event.key === ' ') {
      event.preventDefault();
    }

    if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Tab'].includes(event.key)) {
      if (items.length >= 1) {
        event.preventDefault();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        let isFocusableItem = false;

        while (!isFocusableItem) {
          if (event.key === 'ArrowDown' || (event.key === 'Tab' && !event.shiftKey)) {
            index++;
          } else if (event.key === 'ArrowUp' || (event.key === 'Tab' && event.shiftKey)) {
            index--;
          } else if (event.key === 'Home') {
            index = 0;
          } else if (event.key === 'End') {
            index = items.length - 1;
          }

          if (index < 0) {
            index = items.length - 1;
          } else if (index > items.length - 1) {
            index = 0;
          }

          if (!items[index].disabled) {
            isFocusableItem = true;
          }
        }

        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }

  private handleMouseDown(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.isMenuItem(target)) {
      this.setCurrentItem(target as CpsMenuItem);
    }
  }

  private handleSlotChange() {
    const items = this.getAllItems();

    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }

  private isMenuItem(item?: Element | null) {
    return (
      item?.tagName?.toLowerCase() === 'cps-menu-item' ||
      ['menuitem', 'menuitemcheckbox', 'menuitemradio'].includes(item?.getAttribute('role') ?? '')
    );
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (!this.hasSlotController.test('anchor') && !this.hasTrigger('contextmenu')) {
      return;
    }

    if (this.open) {
      if (this.disabled) {
        this.open = false;
        return;
      }

      this.emit('cps-show');

      await Promise.all([stopAnimations(this.body), stopAnimations(this.flyout?.container)]);

      if (this.body) this.body.hidden = false;
      if (this.flyout) {
        if (this.virtualAnchor) {
          this.flyout.anchor = this.virtualAnchor;
        } else if (this.anchorElement) {
          this.flyout.anchor = this.anchorElement;
        }

        this.flyout.active = true;

        await waitForEvent(this.flyout, 'cps-reposition');
      }

      if (this.flyout?.container) {
        const actualPlacement = this.flyout.getAttribute('data-current-placement') || undefined;
        this.flyout.container.style.transformOrigin = this.getTransformOrigin(actualPlacement);
      }

      const { keyframes, options } = getAnimation(this, 'menu.show', { dir: this.localize.dir() });
      await animateTo(this.flyout?.container, keyframes, options);

      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }

      this.body?.focus();

      CpsMenu.openMenus.add(this);

      this.emit('cps-after-show');
    } else {
      CpsMenu.openMenus.delete(this);

      this.emit('cps-hide');

      await Promise.all([stopAnimations(this.body), stopAnimations(this.flyout?.container)]);

      if (this.flyout?.container) {
        const actualPlacement = this.flyout.getAttribute('data-current-placement') || undefined;
        this.flyout.container.style.transformOrigin = this.getTransformOrigin(actualPlacement);
      }

      const { keyframes, options } = getAnimation(this, 'menu.hide', { dir: this.localize.dir() });
      const initialOpenState = this.open;
      await animateTo(this.flyout?.container, keyframes, options);

      if (this.open !== initialOpenState) return;

      if (this.flyout) this.flyout.active = false;
      if (this.body) this.body.hidden = true;

      this.virtualAnchor = null;

      this.emit('cps-after-hide');
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }

  @watch('trigger')
  handleTriggerChange() {
    this.cleanupListeners();
    this.setupListeners();
    this.removeAnchorListeners();
    this.addAnchorListeners();
  }

  private getAllItems() {
    return [...(this.defaultSlot?.assignedElements({ flatten: true }) ?? [])].filter((el: HTMLElement) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    }) as CpsMenuItem[];
  }

  private getCurrentItem() {
    return this.getAllItems().find(i => i.getAttribute('tabindex') === '0');
  }

  private setCurrentItem(item: CpsMenuItem) {
    const items = this.getAllItems();

    items.forEach(i => {
      i.setAttribute('tabindex', i === item && !item.disabled ? '0' : '-1');
    });
  }

  /**
   * Abre o menu flutuante.
   * Este método é ignorado quando não há elemento no _slot_ `anchor`.
   */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'cps-after-show');
  }

  /**
   * Fecha o menu flutuante.
   * Este método é ignorado quando não há elemento no _slot_ `anchor`.
   */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'cps-after-hide');
  }

  render() {
    const hasAnchor = this.hasSlotController.test('anchor');
    const isFloatingMode = hasAnchor || this.hasTrigger('contextmenu');

    if (!isFloatingMode) {
      return html`
        <div
          part="body"
          class="menu__body"
          role="menu"
          tabindex="-1"
          @click=${this.handleInlineClick}
          @keydown=${this.handleKeyDown}
          @mousedown=${this.handleMouseDown}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      `;
    }

    const isGlobalContextMenu = !hasAnchor && this.hasTrigger('contextmenu');
    const useFixedStrategy = this.hoist || isGlobalContextMenu;

    // Navegação por teclado é provida por @keydown (handleKeyDown) no corpo do menu;
    // @mouseover/@mouseout apenas realçam itens com o ponteiro. Por isso não exigem
    // @focus/@blur — a regra é suprimida para não alterar comportamento.
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <slot name="anchor" @slotchange=${this.handleAnchorSlotChange}></slot>
      <cps-flyout
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        .sync=${this.sync}
        strategy=${useFixedStrategy ? 'fixed' : 'absolute'}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
      >
        <div
          part="body"
          class="menu__body"
          role="menu"
          tabindex="-1"
          @click=${this.handleFloatingClick}
          @keydown=${this.handleKeyDown}
          @mousedown=${this.handleMouseDown}
          @mouseover=${this.handleBodyMouseOver}
          @mouseout=${this.handleBodyMouseOut}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </cps-flyout>
    `;
  }
}

setDefaultAnimation('menu.show', {
  keyframes: [
    { opacity: 0, transform: 'scaleY(0.75)' },
    { opacity: 1, transform: 'scaleY(1)' }
  ],
  options: { duration: 150, easing: 'ease' }
});

setDefaultAnimation('menu.hide', {
  keyframes: [
    { opacity: 1, transform: 'scaleY(1)' },
    { opacity: 0, transform: 'scaleY(0.85)' }
  ],
  options: { duration: 150, easing: 'ease' }
});

export { CpsMenu };

declare global {
  interface HTMLElementTagNameMap {
    'cps-menu': CpsMenu;
  }
}
