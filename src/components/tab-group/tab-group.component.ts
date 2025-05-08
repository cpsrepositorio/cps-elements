import '../icon-button.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { scrollIntoView } from '../../internal/scroll.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './tab-group.styles.js';
import type { CSSResultGroup } from 'lit';
import type CpsTabItem from '../tab-item.js';
import type CpsTabPanel from '../tab-panel.js';

/**
 * @summary Grupos de abas organizam o conteúdo em um contêiner que mostra uma seção por vez.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/tab-group
 * @status stable
 * @since 0.9
 *
 * @dependency cps-icon-button
 *
 * @slot - Usado para agrupar painéis de abas dentro do grupo. Utilize apenas elementos `<cps-tab-panel>`.
 * @slot nav - Usado para especificar as abas existentes dentro do grupo. Utilize apenas elementos `<cps-tab-item>`.
 *
 * @event {{ name: String }} cps-tab-show - Emitido quando o painel de uma aba é exibido.
 * @event {{ name: String }} cps-tab-hide - Emitido quando o painel de uma aba é ocultado.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart nav - O contêiner da área de navegação (um `<div>`), o qual contém a lista de abas, e eventuais elementos auxiliares como os botões de rolagem automática.
 * @csspart tabs - O contêiner que embrulha as abas propriamente ditas (um `<div>`).
 * @csspart active-tab-indicator - O elemento indicativa de seleção atual, por padrão uma linha não apresentada visual, mas que pode ser ativada através da propriedade CSS `--indicator-color`.
 * @csspart body - O contêiner que embrulha o corpo do grupo, onde os painéis de abas são dispostos.
 * @csspart scroll-button - Seletor que intercepta tanto o botão de rolagem em direção ao início quanto em direção ao final da lista de abas (ambos `<cps-icon-button>`), exibidos quando existem abas transbordando, causando rolagem automática da lista de abas.
 * @csspart scroll-button--start - O botão de rolagem em direção ao início da lista de abas.
 * @csspart scroll-button--start__base - A parte `base` re-exportada do botão de rolagem em direção ao início da lista de abas.
 * @csspart scroll-button--start__icon - A parte `icon` re-exportada do botão de rolagem em direção ao início da lista de abas.
 * @csspart scroll-button--end - O botão de rolagem em direção ao final da lista de abas.
 * @csspart scroll-button--end__base - A parte `base` re-exportada do botão de rolagem em direção ao final da lista de abas.
 * @csspart scroll-button--end__icon - A parte `icon` re-exportada do botão de rolagem em direção ao final da lista de abas.
 *
 * @cssproperty --background-navigation - A cor de fundo da área de navegação, onde as abas são dispostas. Padrão: `var(--cps-color-background-solid-primary)`.
 * @cssproperty --background-selection - A cor de fundo das áreas selecionadas, ou seja, tanto a aba selecionada quanto o respectivo painel selecionado. Padrão: `var(--cps-color-background-solid-tertiary)`.
 * @cssproperty --border-color - Cor de borda utilizada em todo o grupo, incluindo área de navegação, aba selecionada, e o respectivo painel selecionado. Padrão: `var(--cps-color-stroke-primary)`.
 * @cssproperty --border-width - Espessura da borda da área de navegação. Padrão: `1px`.
 * @cssproperty --border-radius - Arredondamento de bordas, incluindo área de navegação e painel selecionado. Padrão: `var(--cps-border-radius-large)`.
 * @cssproperty --indicator-color - Cor do indicador de aba atualmente selecionada. Invisível por padrão.
 * @cssproperty --padding-navigation - Espaçamentos internos da área de navegação. Padrão: `var(--cps-spacing-2)`.
 * @cssproperty --track-color - Cor da área de posicionamento de indicador de seleção. Padrão: `var(--border-color)`.
 * @cssproperty --track-width - Espessura da área de posicionamento de indicador de seleção. Padrão: `1px`.
 */
@customElement('cps-tab-group')
export default class CpsTabGroup extends BaseElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  private activeTab?: CpsTabItem;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private tabs: CpsTabItem[] = [];
  private panels: CpsTabPanel[] = [];

  @query('.tab-group') tabGroup: HTMLElement;
  @query('.tab-group__body') body: HTMLSlotElement;
  @query('.tab-group__nav') nav: HTMLElement;
  @query('.tab-group__indicator') indicator: HTMLElement;

  @state() private hasScrollControls = false;

  /** O posicionamento das abas dentro do grupo. */
  @property() placement: 'top' | 'bottom' | 'start' | 'end' = 'top';

  /** Quando definido como `auto`, navegar pelas abas com as teclas de seta mostrará instantaneamente o painel de abas correspondente. Quando definido como `manual`, a aba receberá foco, mas não será exibida até que o usuário pressione a barra de espaço ou tecle `Enter`. */
  @property() activation: 'auto' | 'manual' = 'auto';

  /** Desabilita as setas indicativas de rolagem automática quando as abas transbordarem em relação ao espaço disponível na área de navegação do grupo de abas. */
  @property({ attribute: 'no-scroll-controls', type: Boolean }) noScrollControls = false;

  connectedCallback() {
    const whenAllDefined = Promise.allSettled([
      customElements.whenDefined('cps-tab-item'),
      customElements.whenDefined('cps-tab-panel')
    ]);

    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator();
      this.updateScrollControls();
    });

    this.mutationObserver = new MutationObserver(mutations => {
      // Update aria labels when the DOM changes
      if (mutations.some(m => !['aria-labelledby', 'aria-controls'].includes(m.attributeName!))) {
        setTimeout(() => this.setAriaLabels());
      }

      // Sync tabs when disabled states change
      if (mutations.some(m => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
    });

    // After the first update...
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);

      // Wait for tabs and tab panels to be registered
      whenAllDefined.then(() => {
        // Set initial tab state when the tabs become visible
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
          if (entries[0].intersectionRatio > 0) {
            this.setAriaLabels();
            this.setActiveTab(this.getActiveTab() ?? this.tabs[0], { emitEvents: false });
            observer.unobserve(entries[0].target);
          }
        });
        intersectionObserver.observe(this.tabGroup);
      });
    });
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
    this.resizeObserver.unobserve(this.nav);
  }

  private getAllTabs(options: { includeDisabled: boolean } = { includeDisabled: true }) {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="nav"]')!;

    return [...(slot.assignedElements() as CpsTabItem[])].filter(el => {
      return options.includeDisabled
        ? el.tagName.toLowerCase() === 'cps-tab-item'
        : el.tagName.toLowerCase() === 'cps-tab-item' && !el.disabled;
    });
  }

  private getAllPanels() {
    return [...this.body.assignedElements()].filter(el => el.tagName.toLowerCase() === 'cps-tab-panel') as [
      CpsTabPanel
    ];
  }

  private getActiveTab() {
    return this.tabs.find(el => el.selected);
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('cps-tab-item');
    const tabGroup = tab?.closest('cps-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('cps-tab-item');
    const tabGroup = tab?.closest('cps-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        event.preventDefault();
      }
    }

    // Move focus left or right
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const activeEl = this.tabs.find(t => t.matches(':focus'));
      const isRtl = this.localize.dir() === 'rtl';

      if (activeEl?.tagName.toLowerCase() === 'cps-tab-item') {
        let index = this.tabs.indexOf(activeEl);

        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = this.tabs.length - 1;
        } else if (
          (['top', 'bottom'].includes(this.placement) && event.key === (isRtl ? 'ArrowRight' : 'ArrowLeft')) ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowUp')
        ) {
          index--;
        } else if (
          (['top', 'bottom'].includes(this.placement) && event.key === (isRtl ? 'ArrowLeft' : 'ArrowRight')) ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowDown')
        ) {
          index++;
        }

        if (index < 0) {
          index = this.tabs.length - 1;
        }

        if (index > this.tabs.length - 1) {
          index = 0;
        }

        this.tabs[index].focus({ preventScroll: true });

        if (this.activation === 'auto') {
          this.setActiveTab(this.tabs[index], { scrollBehavior: 'smooth' });
        }

        if (['top', 'bottom'].includes(this.placement)) {
          scrollIntoView(this.tabs[index], this.nav, 'horizontal');
        }

        event.preventDefault();
      }
    }
  }

  private handleScrollToStart() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft + this.nav.clientWidth
          : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private handleScrollToEnd() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft - this.nav.clientWidth
          : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private setActiveTab(tab: CpsTabItem, options?: { emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }) {
    options = {
      emitEvents: true,
      scrollBehavior: 'auto',
      ...options
    };

    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      const tabIndex = this.tabs.indexOf(tab);
      this.activeTab = tab;

      // Sync active tab and panel
      this.tabs.forEach(el => (el.selected = el === this.activeTab));
      this.panels.forEach((el, i) => {
        if (el.name && tab.panel) {
          el.selected = el.name === this.activeTab?.panel;
        } else {
          el.selected = i === tabIndex;
        }
      });
      this.syncIndicator();

      if (['top', 'bottom'].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, 'horizontal', options.scrollBehavior);
      }

      // Emit events
      if (options.emitEvents) {
        if (previousTab) {
          this.emit('cps-tab-hide', { detail: { name: previousTab.panel } });
        }

        this.emit('cps-tab-show', { detail: { name: this.activeTab.panel } });
      }
    }
  }

  private setAriaLabels() {
    // Link each tab with its corresponding panel
    this.tabs.forEach(tab => {
      const panel = this.panels.find(el => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id')!);
        panel.setAttribute('aria-labelledby', tab.getAttribute('id')!);
      }
    });
  }

  private repositionIndicator() {
    const currentTab = this.getActiveTab();

    if (!currentTab) {
      return;
    }

    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const isRtl = this.localize.dir() === 'rtl';

    // We can't used offsetLeft/offsetTop here due to a shadow parent issue where neither can getBoundingClientRect
    // because it provides invalid values for animating elements: https://bugs.chromium.org/p/chromium/issues/detail?id=920069
    const allTabs = this.getAllTabs();
    const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
    const offset = precedingTabs.reduce(
      (previous, current) => ({
        left: previous.left + current.clientWidth + 1,
        top: previous.top + current.clientHeight + 1
      }),
      { left: 0, top: 0 }
    );

    switch (this.placement) {
      case 'top':
      case 'bottom':
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = 'auto';
        this.indicator.style.translate = isRtl ? `${-1 * offset.left}px` : `${offset.left}px`;
        break;

      case 'start':
      case 'end':
        this.indicator.style.width = 'auto';
        this.indicator.style.height = `${height}px`;
        this.indicator.style.translate = `0 ${offset.top}px`;
        break;
    }
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  private syncTabsAndPanels() {
    this.tabs = this.getAllTabs({ includeDisabled: false });
    this.panels = this.getAllPanels();
    this.syncIndicator();

    // After updating, show or hide scroll controls as needed
    this.updateComplete.then(() => this.updateScrollControls());
  }

  @watch('noScrollControls', { waitUntilFirstUpdate: true })
  updateScrollControls() {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    } else {
      this.hasScrollControls =
        ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
    }
  }

  @watch('placement', { waitUntilFirstUpdate: true })
  syncIndicator() {
    const tabs = this.getAllTabs();
    tabs.forEach(tab => (tab.placement = this.placement));

    const tab = this.getActiveTab();

    if (tab) {
      this.indicator.style.display = 'block';
      this.repositionIndicator();
    } else {
      this.indicator.style.display = 'none';
    }
  }

  /** Força a seleção da aba especificada, através do nome de seu painel. */
  show(panel: string) {
    const tab = this.tabs.find(el => el.panel === panel);

    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <div
        part="base"
        class=${classMap({
          'tab-group': true,
          'tab-group--top': this.placement === 'top',
          'tab-group--bottom': this.placement === 'bottom',
          'tab-group--start': this.placement === 'start',
          'tab-group--end': this.placement === 'end',
          'tab-group--rtl': this.localize.dir() === 'rtl',
          'tab-group--has-scroll-controls': this.hasScrollControls
        })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls
            ? html`
                <cps-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button--start__base,icon:scroll-button--start__icon"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${isRtl ? 'chevron-right' : 'chevron-left'}
                  library="system"
                  label=${this.localize.term('scrollToStart')}
                  @click=${this.handleScrollToStart}
                ></cps-icon-button>
              `
            : ''}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls
            ? html`
                <cps-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button--end__base,icon:scroll-button--end__icon"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${isRtl ? 'chevron-left' : 'chevron-right'}
                  library="system"
                  label=${this.localize.term('scrollToEnd')}
                  @click=${this.handleScrollToEnd}
                ></cps-icon-button>
              `
            : ''}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
}

export { CpsTabGroup };

declare global {
  interface HTMLElementTagNameMap {
    'cps-tab-group': CpsTabGroup;
  }
}
