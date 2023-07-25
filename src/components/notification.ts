import './icon-button.js';
import { animateTo, stopAnimations } from '../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../utilities/animation-registry.js';
import { HasSlotController } from '../internal/slot.js';
import { html } from 'lit';
import { LocalizeController } from '../utilities/localize.js';
import { waitForEvent } from '../internal/event.js';
import { watch } from '../internal/watch.js';
import BaseElement from '../internal/base-element.js';
import styles from './notification/notification.styles.js';
import type { CSSResultGroup } from 'lit';

const toastStack = Object.assign(document.createElement('div'), { className: 'cps-toast-stack' });

/**
 * @summary Notificações são usadas para exibir mensagens importantes de forma pontual, localmente ou como _toast_.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/notification
 * @status stable
 * @since 0.7
 *
 * @dependency cps-icon-button
 *
 * @slot - O conteúdo principal da notificação, usualmente uma mensagem a ser exibida.
 * @slot icon - Um ícone personalizado a ser exibido junto à notificação (utilize um `<cps-icon>` para melhor apresentação). Não possui efeito se o atributo `icon` estiver em uso.
 *
 * @event cps-show - Emitido quando a notificação aparece.
 * @event cps-after-show - Emitido após a notificação aparecer e todas as animações terem sido completadas.
 * @event cps-hide - Emitido quando a notificação some.
 * @event cps-after-hide - Emitido após a notificação sumir e todas as animações terem sido completadas.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart icon - O elemento que embrulha o ícone opcional (um `<div>`) no qual se aplica a cor de fundo de acordo com a variante da notificação, seja ele gerado automaticamente ou informado com _slot_.
 * @csspart message - O elemento que embrulha o conteúdo principal da notificação, usualmente contendo um ou mais elementos que definem a mensagem de exibição.
 * @csspart close-button - O botão de fechar a notificação (caso `closable` esteja em uso).
 * @csspart close-button__base - A parte `base` re-exportada do botão de fechar.
 * @csspart close-button__icon - A parte `icon` re-exportada do botão de fechar.
 *
 * @animation notification.show - A animação utilizada ao exibir uma notificação, por padrão uma sutil mudança de escala e opacidade, durante 250 milissegundos.
 * @animation notification.hide - A animação utilizada ao ocultar uma notificação, por padrão uma sutil mudança de escala e opacidade, durante 250 milissegundos.
 */

@customElement('cps-notification')
export default class CpsNotification extends BaseElement {
  static styles: CSSResultGroup = styles;

  private autoHideTimeout: number;
  private readonly hasSlotController = new HasSlotController(this, 'icon', 'suffix');
  private readonly localize = new LocalizeController(this);

  @query('[part~="base"]') base: HTMLElement;

  /**
   * Indica se a notificação está aberta. Você pode alternar este atributo, manualmente ou reativamente, para mostrar e ocultar a notificação. Opcionalmente, pode utilizar os métodos `show()` e `hide()` se preferir uma abordagem imperativa, e este atributo refletirá o estado aberto da notificação em tempo real.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Habilita a exibição de um botão de fechar para que o usuário possa ocultar a notificação imediatamente. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** A variante visual para apresentação da notificação. */
  @property({ reflect: true }) variant: 'neutral' | 'informative' | 'warning' | 'critical' | 'success' = 'neutral';

  /** Exibe ícone automático de acordo com a variante, ao invés de utilizar o _slot_ `icon`. */
  @property({ type: Boolean, reflect: true }) icon = false;

  /**
   * A duração, em milissegundos, que a notificação será exibida antes de se ocultar automaticamente. Caso o usuário interaja com a notificação antes dela se ocultar (por exemplo, movendo o _mouse_ sobre ela), o temporizador será reiniciado. O padrão `Infinity` significa que a notificação não se ocultará automaticamente.
   */
  @property({ type: Number }) duration = Infinity;

  firstUpdated() {
    this.base.hidden = !this.open;
  }

  private restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  private handleCloseClick() {
    this.hide();
  }

  private handleMouseMove() {
    this.restartAutoHide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('cps-show');

      if (this.duration < Infinity) {
        this.restartAutoHide();
      }

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'notification.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit('cps-after-show');
    } else {
      // Hide
      this.emit('cps-hide');

      clearTimeout(this.autoHideTimeout);

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'notification.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit('cps-after-hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  /** Exibe a notificação, no local onde foi definida através de seu HTML e CSS. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'cps-after-show');
  }

  /** Oculta a notificação, caso esta esteja visível. */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'cps-after-hide');
  }

  /**
   * Exibe a notificação como um _toast_. Isto irá mover a notificação para fora de sua posição no DOM e, quando ocultada, ela será removida do DOM completamente. Ao armazenar uma referência à notificação, você pode reutilizá-la chamando este método novamente. Retorna uma `Promise`que será resolvida após a notificação ser ocultada.
   */
  async toast() {
    return new Promise<void>(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      toastStack.appendChild(this);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        this.clientWidth;
        this.show();
      });

      this.addEventListener(
        'cps-after-hide',
        () => {
          toastStack.removeChild(this);
          resolve();

          // Remove the toast stack from the DOM when there are no more notifications
          if (toastStack.querySelector('cps-notification') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  private hasIcon() {
    return this.icon || this.hasSlotController.test('icon');
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          notification: true,
          'notification--open': this.open,
          'notification--closable': this.closable,
          'notification--has-icon': this.hasIcon(),
          'notification--neutral': this.variant === 'neutral',
          'notification--informative': this.variant === 'informative',
          'notification--warning': this.variant === 'warning',
          'notification--critical': this.variant === 'critical',
          'notification--success': this.variant === 'success'
        })}
        role=${['neutral', 'informative'].includes(this.variant) ? 'status' : 'alert'}
        aria-hidden=${this.open ? 'false' : 'true'}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="notification__icon">
          ${this.icon
            ? html` <cps-icon library="system" .name=${`status-${this.variant}`}></cps-icon> `
            : html` <slot name="icon"></slot> `}
        </div>

        <div part="message" class="notification__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable
          ? html`
              <cps-icon-button
                part="close-button"
                exportparts="base:close-button__base,icon:close-button__icon"
                class="notification__close-button"
                name="dismiss"
                library="system"
                label=${this.localize.term('close')}
                @click=${this.handleCloseClick}
                size="small"
              ></cps-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

setDefaultAnimation('notification.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('notification.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: 'ease' }
});

interface ToastOptions {
  variant?: CpsNotification['variant'];
  duration?: number;
  closable?: boolean;
  icon?: boolean | string;
}

export const toast = (
  message: string,
  options: ToastOptions = { variant: 'informative', closable: true, duration: 5000, icon: true }
) => {
  function escapeHtml(content: string) {
    const div = document.createElement('div');
    div.textContent = content;
    return div.innerHTML;
  }

  const notification = Object.assign(document.createElement('cps-notification'), {
    variant: options.variant,
    closable: options.closable,
    duration: options.duration,
    icon: options.icon === undefined ? true : typeof options.icon === 'boolean' ? options.icon : false,
    innerHTML: `
      ${
        options.icon && typeof options.icon === 'string'
          ? `<cps-icon name="${options.icon}" slot="icon"></cps-icon>`
          : ''
      }
      ${escapeHtml(message)}
    `
  });

  document.body.append(notification);
  return notification.toast();
};

export { CpsNotification };

declare global {
  interface HTMLElementTagNameMap {
    'cps-notification': CpsNotification;
  }
}
