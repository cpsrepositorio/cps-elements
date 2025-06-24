import '../icon-button.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import Modal from '../../internal/modal.js';
import styles from './drawer.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Gavetas de navegação (_drawers_) deslizam a partir de uma borda da tela para exibir informações ou ações complementares, causando uma mudança de foco imediata para o usuário.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/drawer
 * @status stable
 * @since 0.20.0
 *
 * @dependency cps-icon-button
 *
 * @slot - O conteúdo principal da gaveta de navegação.
 * @slot label - O rótulo da gaveta de navegação. Alternativamente, você pode usar o atributo `label`.
 * @slot header-actions - Ações opcionais para adicionar ao cabeçalho. Funciona melhor com `<cps-icon-button>`.
 * @slot footer - O rodapé da gaveta de navegação, geralmente um ou mais botões representando várias opções.
 *
 * @event cps-show - Emitido quando a gaveta de navegação começa a ser aberta.
 * @event cps-after-show - Emitido após a gaveta de navegação ser aberta e todas as animações serem concluídas.
 * @event cps-close - Emitido quando a gaveta de navegação começa a ser fechada.
 * @event cps-after-close - Emitido após a gaveta de navegação ser fechada e todas as animações serem concluídas.
 * @event cps-initial-focus - Emitido quando a gaveta de navegação é aberta e está pronta para receber foco. Chamar
 *   `event.preventDefault()` impedirá o foco e permitirá que você o defina em um elemento diferente, como um campo de entrada.
 * @event {{ source: 'backdrop' | 'header' | 'keyboard' }} cps-request-close - Emitido quando o usuário tenta
 *   fechar a gaveta de navegação clicando no botão de fechar, clicando na sobreposição ou pressionando Escape. Chamar
 *   `event.preventDefault()` manterá a gaveta de navegação aberta. Evite usar isso a menos que fechar a gaveta de navegação resulte em
 *   comportamento destrutivo, como perda de dados.
 *
 * @csspart base - O elemento base que envolve o componente.
 * @csspart backdrop - A sobreposição que cobre a tela por trás da gaveta de navegação.
 * @csspart panel - O painel da gaveta de navegação (onde a gaveta e seu conteúdo são renderizados).
 * @csspart header - O cabeçalho da gaveta de navegação. Este elemento envolve o título e ações do cabeçalho.
 * @csspart header-actions - Contêiner para ações opcionais do cabeçalho.
 * @csspart title - O título da gaveta de navegação.
 * @csspart close-button - O botão de fechar, um `<cps-icon-button>`.
 * @csspart close-button__base - A parte `base` exportada do botão de fechar.
 * @csspart body - O corpo da gaveta de navegação.
 * @csspart footer - O rodapé da gaveta de navegação.
 *
 * @cssproperty --size - O tamanho preferencial da gaveta de navegação. Será aplicado à largura ou altura dependendo do `placement`.
 * @cssproperty --header-spacing - A quantidade de preenchimento a ser usada para o cabeçalho.
 * @cssproperty --body-spacing - A quantidade de preenchimento a ser usada para o corpo.
 * @cssproperty --footer-spacing - A quantidade de preenchimento a ser usada para o rodapé.
 *
 * @animation drawer.showTop - Animação ao mostrar a gaveta de navegação vindo do topo.
 * @animation drawer.showEnd - Animação ao mostrar a gaveta de navegação vindo da direita.
 * @animation drawer.showBottom - Animação ao mostrar a gaveta de navegação vindo de baixo.
 * @animation drawer.showStart - Animação ao mostrar a gaveta de navegação vindo da esquerda.
 * @animation drawer.hideTop - Animação ao ocultar a gaveta de navegação para o topo.
 * @animation drawer.hideEnd - Animação ao ocultar a gaveta de navegação para a direita.
 * @animation drawer.hideBottom - Animação ao ocultar a gaveta de navegação para baixo.
 * @animation drawer.hideStart - Animação ao ocultar a gaveta de navegação para a esquerda.
 * @animation drawer.denyClose - Animação ao negar o fechamento da gaveta de navegação.
 * @animation drawer.backdrop.show - Animação ao mostrar a sobreposição da gaveta de navegação.
 * @animation drawer.backdrop.hide - Animação ao ocultar a sobreposição da gaveta de navegação.
 */
@customElement('cps-drawer')
export default class CpsDrawer extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'label', 'header-actions', 'footer');
  private readonly localize = new LocalizeController(this);
  private modal: Modal;
  private originalTrigger: HTMLElement | null;

  @query('.drawer') drawer: HTMLElement;
  @query('.drawer__panel') panel: HTMLElement;
  @query('.drawer__backdrop') backdrop: HTMLElement;

  /** Indica se a gaveta de navegação está aberta ou não. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Habilita a exibição de um botão de fechar no cabeçalho, como uma forma ainda mais evidente ao usuário de que a caixa de diálogo pode ser fechada.
   * Não possui efeito caso não haja cabeçalho, ou seja, se não houver valor no atributo `label` e não houver conteúdo no _slot_ `label`.
   */
  @property({ type: Boolean, reflect: true }) closable = false;

  /**
   * O rótulo da caixa de diálogo exibido no cabeçalho. Você deve sempre incluir um rótulo relevante para
   * acessibilidade adequada. Se você precisar exibir HTML, use o slot `label` em vez disso.
   */
  @property({ reflect: true }) label = '';

  /**
   * O rótulo de acessibilidade para o diálogo. Se não for especificado, o atributo `label` será usado.
   * É altamente recomendável definir este atributo, caso não haja um valor definido para o atributo `label`.
   */
  @property({ attribute: 'aria-label' }) ariaLabel = '';

  /** Direção de onde a gaveta de navegação será exibida. */
  @property({ reflect: true }) placement: 'top' | 'end' | 'bottom' | 'start' = 'end';

  /**
   * Por padrão, a gaveta de navegação é uma sobreposição sobre toda a página.
   * Usando este atributo, ela passa a ser contida dentro de seu elemento pai.
   */
  @property({ type: Boolean, reflect: true }) contained = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.modal = new Modal(this);
  }

  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();

      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    this.removeOpenListeners();
  }

  private async playAnimation(target: HTMLElement, animationName: string) {
    const animation = getAnimation(target, animationName, { dir: this.localize.dir() });
    if (animation) {
      const { keyframes, options } = animation;
      const anim = target.animate(keyframes, options);
      await anim.finished;
    }
  }

  private requestClose(source: 'backdrop' | 'header' | 'keyboard') {
    const event = this.emit('cps-request-close', {
      cancelable: true,
      detail: { source }
    });
    if (event.defaultPrevented) {
      this.playAnimation(this.panel, 'drawer.denyClose');
      return;
    }
    this.close();
  }

  private addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      this.emit('cps-show');
      this.addOpenListeners();
      this.originalTrigger = document.activeElement as HTMLElement;

      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }

      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      this.drawer.hidden = false;

      await Promise.all([
        this.playAnimation(this.backdrop, 'drawer.backdrop.show'),
        this.playAnimation(this.panel, `drawer.show${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`)
      ]);

      const initialFocusEvent = this.emit('cps-initial-focus', { cancelable: true });

      if (!initialFocusEvent.defaultPrevented) {
        if (autoFocusTarget) {
          (autoFocusTarget as HTMLInputElement).focus({ preventScroll: true });
        } else {
          this.panel.focus({ preventScroll: true });
        }
      }

      if (autoFocusTarget) {
        autoFocusTarget.setAttribute('autofocus', '');
      }

      this.emit('cps-after-show');
    } else {
      this.emit('cps-close');
      this.removeOpenListeners();

      if (!this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }

      await Promise.all([
        this.playAnimation(
          this.panel,
          `drawer.hide${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`
        ),
        this.playAnimation(this.backdrop, 'drawer.backdrop.hide')
      ]);

      this.drawer.hidden = true;
      if (this.originalTrigger && typeof this.originalTrigger.focus === 'function') {
        setTimeout(() => this.originalTrigger!.focus());
      }
      this.emit('cps-after-close');
    }
  }

  /** Mostra a gaveta de navegação. */
  async show() {
    if (this.open) return;
    this.open = true;
    await waitForEvent(this, 'cps-after-show');
  }

  /** Fecha a gaveta de navegação. */
  async close() {
    if (!this.open) return;
    this.open = false;
    await waitForEvent(this, 'cps-after-close');
  }

  render() {
    const hasBodySlot = this.hasSlotController.test('[default]');
    const hasFooterSlot = this.hasSlotController.test('footer');
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabelText = this.label.length > 0;

    return html`
      <div
        part="base"
        class=${classMap({
          drawer: true,
          'drawer--contained': this.contained,
          'drawer--fixed': !this.contained,
          'drawer--has-body': hasBodySlot,
          'drawer--has-footer': hasFooterSlot,
          'drawer--has-header': hasLabelText || hasLabelSlot,
          'drawer--open': this.open,
          [`drawer--${this.placement}`]: true
        })}
      >
        <div part="backdrop" class="drawer__backdrop" @click=${() => this.requestClose('backdrop')} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-label=${ifDefined(this.ariaLabel || (hasLabelText ? this.label : undefined))}
          aria-labelledby=${ifDefined(this.ariaLabel || (hasLabelSlot ? 'title' : undefined))}
          tabindex="0"
        >
          ${hasLabelText || hasLabelSlot
            ? html`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <slot name="label">${hasLabelText ? this.label : String.fromCharCode(65279)}</slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    ${this.closable
                      ? html`
                          <cps-tooltip content="${this.localize.term('close')}" hoist>
                            <cps-icon-button
                              part="close-button"
                              exportparts="base:close-button__base"
                              class="drawer__close"
                              name="dismiss"
                              label=${this.localize.term('close')}
                              library="system"
                              @click="${() => this.requestClose('header')}"
                            ></cps-icon-button>
                          </cps-tooltip>
                        `
                      : ''}
                  </div>
                </header>
              `
            : ''}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('drawer.showTop', {
  keyframes: [
    { opacity: 0, translate: '0 -100%' },
    { opacity: 1, translate: '0 0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideTop', {
  keyframes: [
    { opacity: 1, translate: '0 0' },
    { opacity: 0, translate: '0 -100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.showEnd', {
  keyframes: [
    { opacity: 0, translate: '100%' },
    { opacity: 1, translate: '0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideEnd', {
  keyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.showBottom', {
  keyframes: [
    { opacity: 0, translate: '0 100%' },
    { opacity: 1, translate: '0 0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideBottom', {
  keyframes: [
    { opacity: 1, translate: '0 0' },
    { opacity: 0, translate: '0 100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.showStart', {
  keyframes: [
    { opacity: 0, translate: '-100%' },
    { opacity: 1, translate: '0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideStart', {
  keyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '-100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('drawer.backdrop.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('drawer.backdrop.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

export { CpsDrawer };

declare global {
  interface HTMLElementTagNameMap {
    'cps-drawer': CpsDrawer;
  }
}
