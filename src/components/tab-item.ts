import './icon-button.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { HasSlotController } from '../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../utilities/localize.js';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './tab-item/tab-item.styles.js';
import type { CSSResultGroup } from 'lit';

let id = 0;

/**
 * @summary Abas (_tab items_) são usadas dentro de [grupos de abas](/componentes/tab-group) para controlar a visibilidade de [painéis de abas](/components/tab-panel).
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/tab
 * @status stable
 * @since 0.9
 *
 * @dependency cps-icon-button
 *
 * @slot - O conteúdo da aba.
 * @slot prefix - Um ícone ou elemento similar antes do conteúdo principal.
 *
 * @event cps-close - Emitido quando o botão de fechar da aba `closable` é acionado.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart content - O elemento que embrulha o conteúdo principal, normalmente o _label_ do botão.
 * @csspart close-button - O botão de fechar a aba (caso `closable` esteja em uso).
 * @csspart close-button__base - A parte `base` re-exportada do botão de fechar.
 * @csspart close-button__icon - A parte `icon` re-exportada do botão de fechar.
 *
 * @cssproperty --selected-background - A cor de fundo da aba, quando ela está selecionada. Padrão: `var(--cps-color-background-solid-tertiary)`. Idealmente, se for personalizar, garanta que a cor aplicada é a mesma que a do painel de abas associado.
 * @cssproperty --selected-border - A cor da borda da aba, quando ela está selecionada. Padrão: `var(--cps-color-stroke-primary)`. Idealmente, se for personalizar, garanta que a cor aplicada é a mesma que a do painel de abas associado.
 * @cssproperty --border-radius - Arredondamento dos cantos da aba. Padrão: `var(--cps-spacing-1-5)`.
 * @cssproperty --inverse-rounded-corner-size - Arredondamento invertido posicionado na base da aba, causando o efeito de uma curvatura para fora. Padrão: `8px`.
 */
@customElement('cps-tab-item')
export default class CpsTabItem extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix');
  private readonly localize = new LocalizeController(this);

  private readonly attrId = ++id;
  private readonly componentId = `cps-tab-item-${this.attrId}`;

  @query('.tab-item') tab: HTMLElement;

  /** Nome do painel de abas associado à aba. O painel deve estar no mesmo grupo de abas. */
  @property({ reflect: true }) panel = '';

  /** Determinada que a aba está selecionada, representando que o painel atrelado a ela está marcado. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** O posicionamento da aba dentro de seu grupo, para a correta renderização de bordas nas posições ideais. */
  @property() placement: 'top' | 'bottom' | 'start' | 'end' = 'top';

  /** Habilita a exibição de um botão de fechar para que o usuário possa remover a aba. */
  @property({ type: Boolean }) closable = false;

  /** Força a aba a fluir através de seu contêiner. */
  @property({ type: Boolean, reflect: true }) fluid = false;

  /** Desabilita a aba. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  private handleCloseClick(event: Event) {
    event.stopPropagation();
    this.emit('cps-close');
  }

  @watch('selected')
  handleSelectedChange() {
    this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  /** Coloca o foco na aba. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Remove o foco da aba. */
  blur() {
    this.tab.blur();
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    return html`
      <div
        part="base"
        class=${classMap({
          'tab-item': true,
          'tab-item--fluid': this.fluid,
          'tab-item--selected': this.selected,
          'tab-item--closable': this.closable,
          'tab-item--disabled': this.disabled,
          'tab-item--top': this.placement === 'top',
          'tab-item--bottom': this.placement === 'bottom',
          'tab-item--start': this.placement === 'start',
          'tab-item--end': this.placement === 'end',
          'tab-item--rtl': this.localize.dir() === 'rtl',
          'tab-item--has-label': this.hasSlotController.test('[default]'),
          'tab-item--has-prefix': this.hasSlotController.test('prefix')
        })}
        tabindex=${this.selected || this.disabled ? '-1' : '0'}
      >
        <slot name="prefix" part="prefix" class="tab-item__prefix"></slot>

        <slot part="content" class="tab-item__content"></slot>

        ${this.closable
          ? html`
              <cps-icon-button
                part="close-button"
                exportparts="base:close-button__base,icon:close-button__icon"
                class="tab-item__close-button"
                name="dismiss"
                library="system"
                size="small"
                label=${this.localize.term('close')}
                @click=${this.handleCloseClick}
              ></cps-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

export { CpsTabItem };

declare global {
  interface HTMLElementTagNameMap {
    'cps-tab-item': CpsTabItem;
  }
}
