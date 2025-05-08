import '../icon.js';
import { animateTo, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit/static-html.js';
import { LocalizeController } from '../../utilities/localize.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './accordion.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary _Accordion_ é utilizado para expandir e contrair conteúdo de forma agrupada e organizada.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/accordion
 * @status stable
 * @since 0.13
 *
 * @dependency cps-icon
 *
 * @event cps-show - Emitido quando o _accordion_ de opções começa a ser exibida.
 * @event cps-after-show - Emitido após o _accordion_ de opções ser exibida e todas as animações terem sido concluídas.
 * @event cps-hide - Emitido quando o _accordion_ de opções começa a ser ocultada.
 * @event cps-after-hide - Emitido após o _accordion_ de opções ser ocultada e todas as animações terem sido concluídas.
 *
 * @slot - O conteúdo interno do _accordion_.
 * @slot icon - Um ícone opcional antes do título do _accordion_.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart header - O cabeçalho do _accordion_ (um `<button>`).
 * @csspart content - O painel de conteúdo interno do _accordion_ (um `<div>`).
 */
@customElement('cps-accordion')
export default class CpsAccordion extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'icon');
  private readonly localize = new LocalizeController(this);

  @query('.accordion__header') header: HTMLButtonElement;
  @query('.accordion__content') content: HTMLDivElement;

  /**
   * Indica se o _accordion_ está aberto, ou seja, se o seu conteúdo interno está sendo exibido. Você pode alternar este atributo, manualmente ou reativamente. Opcionalmente, pode utilizar os métodos `show()` e `hide()` se preferir uma abordagem imperativa, e este atributo refletirá o estado aberto do _accordion_ em tempo real.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Um subtítulo opcional para o cabeçalho do _accordion_. */
  @property({ type: String }) subtitle = '';

  /** O título obrigatório do cabeçalho do _accordion_. */
  @property({ type: String }) title = '';

  @watch('open')
  async handleOpenChange(wasOpen: boolean | undefined, open: boolean) {
    if (wasOpen === undefined) {
      requestAnimationFrame(() => (this.content.hidden = !open));
      return;
    }

    if (open) {
      this.emit('cps-show');

      await stopAnimations(this);
      this.content.hidden = false;

      const { keyframes, options } = getAnimation(this, 'accordion.show', { dir: this.localize.dir() });
      await animateTo(this.content, keyframes, options);

      this.emit('cps-after-show');
    } else {
      this.emit('cps-hide');

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'accordion.hide', { dir: this.localize.dir() });
      await animateTo(this.content, keyframes, options);
      this.content.hidden = true;

      this.emit('cps-after-hide');
    }
  }

  /** Exibe o conteúdo associado a este _accordion_. */
  async show() {
    if (this.open) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'cps-after-show');
  }

  /** Oculta o conteúdo associado a este _accordion_. */
  async hide() {
    if (!this.open) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'cps-after-hide');
  }

  /** Simula um _click_ no cabeçalho. */
  click() {
    this.open = !this.open;
  }

  /** Coloca o foco no cabeçalho. */
  focus(options?: FocusOptions) {
    this.header.focus(options);
  }

  /** Remove o foco do cabeçalho. */
  blur() {
    this.header.blur();
  }

  render() {
    const hasContent = this.hasSlotController.test('[default]');
    const hasIcon = this.hasSlotController.test('icon');

    return html`
      <div
        class=${classMap({
          accordion: true,
          'accordion--open': this.open,
          'accordion--has-content': hasContent,
          'accordion--has-icon': hasIcon
        })}
        part="base"
        title
      >
        <button
          aria-controls="content"
          aria-expanded=${this.open}
          class="accordion__header"
          id="header"
          part="header"
          type="button"
          @click=${this.click}
        >
          <div class="accordion__header-content">
            <slot class="accordion__header-icon" name="icon" part="icon"></slot>
            <span class="accordion__header-title" part="title">${this.title}</span>
            <span class="accordion__header-subtitle" part="subtitle">${this.subtitle}</span>
          </div>

          <cps-icon class="accordion__header-caret" library="system" name="caret" part="caret"></cps-icon>
        </button>

        <div aria-labelledby="header" class="accordion__content" id="content" part="content" role="region">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('accordion.show', {
  keyframes: [
    { opacity: 0, transform: 'scaleY(0)' },
    { opacity: 1, transform: 'scaleY(1)' }
  ],
  options: { duration: 250, easing: 'ease-out' }
});

setDefaultAnimation('accordion.hide', {
  keyframes: [
    { opacity: 1, transform: 'scaleY(1)' },
    { opacity: 0, transform: 'scaleY(0)' }
  ],
  options: { duration: 200, easing: 'ease-in' }
});

export { CpsAccordion };

declare global {
  interface HTMLElementTagNameMap {
    'cps-accordion': CpsAccordion;
  }
}
