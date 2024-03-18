import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { HasSlotController } from '../internal/slot.js';
import { html } from 'lit/static-html.js';
import { LocalizeController } from '../utilities/localize.js';
import BaseElement from '../internal/base-element.js';
import styles from './link/link.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary _Links_ são usados para navegação entre páginas ou para abrir URLs externas.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/link
 * @status stable
 * @since 0.11
 *
 * @event cps-blur - Emitido quando o _link_ perde o foco.
 * @event cps-focus - Emitido quando o _link_ obtém o foco.
 *
 * @csspart base - O elemento principal propriamente dito (um `<a>`).
 * @csspart prefix - O elemento que embrulha a renderização do _slot_ `prefix`.
 * @csspart content - O elemento que embrulha o conteúdo principal, normalmente o texto do _link_.
 * @csspart suffix - O elemento que embrulha a renderização do _slot_ `suffix`.
 */
@customElement('cps-link')
export default class CpsLink extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'prefix', 'suffix');
  private readonly localize = new LocalizeController(this);

  @query('.link') link: HTMLAnchorElement;

  /** Desabilita o _link_. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** O destino do _link_, podendo ser tanto um caminho relativo ao documento atual,
   * para navegação interna, quanto um caminho absoluto para navegação externa. */
  @property() href = '';

  /** O tamanho do _link_. */
  @property({ reflect: true }) size:
    | 'stamp'
    | 'caption'
    | 'label'
    | 'body'
    | 'body-emphasized'
    | 'body-strong'
    | 'body-large'
    | 'subtitle'
    | 'title'
    | 'heading'
    | 'display' = 'body';

  /** O alvo do _link_, podendo ser `_self`, `_blank`, `_parent`, `_top`, ou um nome de janela ou _frame_ específico. */
  @property() target = '_self';

  private handleClick(event: MouseEvent) {
    // Prevent the click event from being emitted when the anchor is disabled
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  private handleBlur() {
    this.emit('cps-blur');
  }

  private handleFocus() {
    this.emit('cps-focus');
  }


  /** Simula um _click_ no elemento. */
  click() {
    this.link.click();
  }

  /** Coloca o foco no _link_. */
  focus(options?: FocusOptions) {
    this.link.focus(options);
  }

  /** Remove o foco do _link_. */
  blur() {
    this.link.blur();
  }

  render() {
    return html`
      <a
        part="base"
        href=${this.href}
        target=${this.target}
        @click=${this.handleClick}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        class=${classMap({
          link: true,

          // Statuses
          'link--disabled': this.disabled,
          'link--rtl': this.localize.dir() === 'rtl',

          // Slots
          'link--has-label': this.hasSlotController.test('[default]'),
          'link--has-prefix': this.hasSlotController.test('prefix'),
          'link--has-suffix': this.hasSlotController.test('suffix'),

          // Sizes
          'link--stamp': this.size === 'stamp',
          'link--caption': this.size === 'caption',
          'link--label': this.size === 'label',
          'link--body': this.size === 'body',
          'link--body-em': this.size === 'body-emphasized',
          'link--body-strong': this.size === 'body-strong',
          'link--body-large': this.size === 'body-large',
          'link--subtitle': this.size === 'subtitle',
          'link--title': this.size === 'title',
          'link--heading': this.size === 'heading',
          'link--display': this.size === 'display'
        })}
      >
        <slot name="prefix" part="prefix" class="link__prefix"></slot>
        <slot part="content" class="link__content"></slot>
        <slot name="suffix" part="suffix" class="link__suffix"></slot>
      </a>
    `;
  }
}

export { CpsLink };

declare global {
  interface HTMLElementTagNameMap {
    'cps-link': CpsLink;
  }
}
