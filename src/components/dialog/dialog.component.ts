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
import styles from './dialog.styles';
import type { default as CpsRequestClose } from '../../events/cps-request-close.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Caixas de diálogo, às vezes chamadas de "modais", aparecem acima de outros elementos na página e requerem atenção imediata do usuário.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/dialog
 * @status stable
 * @since 0.17.0
 *
 * @dependency cps-icon-button
 *
 * @slot - O conteúdo principal da caixa de diálogo.
 * @slot label - O rótulo da caixa de diálogo. Alternativamente, você pode usar o atributo `label`.
 * @slot header-actions - Ações opcionais para adicionar ao cabeçalho. Funciona melhor com `<cps-icon-button>`.
 * @slot footer - O rodapé da caixa de diálogo, geralmente um ou mais botões representando várias opções.
 *
 * @event cps-show - Emitido quando a caixa de diálogo começa a ser aberta.
 * @event cps-after-show - Emitido após a caixa de diálogo ser aberta e todas as animações serem concluídas.
 * @event cps-close - Emitido quando a caixa de diálogo começa a ser fechada.
 * @event cps-after-close - Emitido após a caixa de diálogo ser fechada e todas as animações serem concluídas.
 * @event cps-initial-focus - Emitido quando a caixa de diálogo é aberta e está pronta para receber foco. Chamar
 *   `event.preventDefault()` impedirá o foco e permitirá que você o defina em um elemento diferente, como um campo de entrada.
 * @event {{ source: 'backdrop' | 'header' | 'keyboard' }} cps-request-close - Emitido quando o usuário tenta
 *   fechar a caixa de diálogo clicando no botão de fechar, clicando na sobreposição ou pressionando Escape. Chamar
 *   `event.preventDefault()` manterá a caixa de diálogo aberta. Evite usar isso a menos que fechar a caixa de diálogo resulte em
 *   comportamento destrutivo, como perda de dados.
 *
 * @csspart base - O elemento base que envolve o componente.
 * @csspart backdrop - A sobreposição que cobre a tela por trás da caixa de diálogo.
 * @csspart panel - O painel da caixa de diálogo (onde a caixa de diálogo e seu conteúdo são renderizados).
 * @csspart header - O cabeçalho da caixa de diálogo. Este elemento envolve o título e ações do cabeçalho.
 * @csspart header-actions - Contêiner para ações opcionais do cabeçalho.
 * @csspart title - O título da caixa de diálogo.
 * @csspart close-button - O botão de fechar, um `<cps-icon-button>`.
 * @csspart close-button__base - A parte `base` exportada do botão de fechar.
 * @csspart body - O corpo da caixa de diálogo.
 * @csspart footer - O rodapé da caixa de diálogo.
 *
 * @cssproperty --width - A largura preferida da caixa de diálogo. Observe que, ainda assim, a caixa de diálogo diminuirá para se acomodar em telas menores.
 * @cssproperty --header-spacing - A quantidade de preenchimento a ser usada para o cabeçalho.
 * @cssproperty --body-spacing - A quantidade de preenchimento a ser usada para o corpo.
 * @cssproperty --footer-spacing - A quantidade de preenchimento a ser usada para o rodapé.
 *
 * @animation dialog.show - A animação a ser usada ao mostrar a caixa de diálogo.
 * @animation dialog.hide - A animação a ser usada ao ocultar a caixa de diálogo.
 * @animation dialog.denyClose - A animação a ser usada quando uma solicitação para fechar a caixa de diálogo é negada.
 * @animation dialog.backdrop.show - A animação a ser usada ao mostrar a sobreposição da caixa de diálogo.
 * @animation dialog.backdrop.hide - A animação a ser usada ao ocultar a sobreposição da caixa de diálogo.
 */
@customElement('cps-dialog')
export default class CpsDialog extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'label', 'header-actions', 'footer');
  private readonly localize = new LocalizeController(this);
  private modal: Modal;
  private originalTrigger: HTMLElement | null;

  @query('.dialog') dialog: HTMLElement;
  @query('.dialog__panel') panel: HTMLElement;
  @query('.dialog__backdrop') backdrop: HTMLElement;

  /**
   * Indica se a caixa de diálogo está aberta ou não. Você pode alternar este atributo para mostrar e ocultar a caixa de diálogo, ou pode
   * usar os métodos `show()` e `hide()` e este atributo refletirá o estado aberto da caixa de diálogo.
   */
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

  /**
   * O valor de retorno do diálogo, similar ao `returnValue` de um elemento de diálogo nativo.
   * Este valor é definido quando o diálogo é fechado e pode ser usado para determinar qual ação
   * foi tomada pelo usuário.
   */
  @property() returnValue: string | boolean | undefined = undefined;

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.modal = new Modal(this);
  }

  firstUpdated() {
    this.dialog.hidden = !this.open;

    if (this.open) {
      this.addOpenListeners();
      this.modal.activate();
      lockBodyScrolling(this);
    }

    // Configura a manipulação de botões no slot footer
    this.setupFooterButtons();
  }

  private setupFooterButtons() {
    const footerSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="footer"]');
    footerSlot?.addEventListener('slotchange', () => {
      const footerElements = footerSlot.assignedElements({ flatten: true });
      footerElements.forEach(element => {
        if (element instanceof HTMLButtonElement || element.tagName.toLowerCase() === 'cps-button') {
          element.addEventListener('click', this.handleFooterButtonClick.bind(this));
        }
      });
    });
  }

  private handleFooterButtonClick(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;

    // Verifica se o botão possui formmethod="dialog"
    if (button.formMethod === 'dialog' || button.getAttribute('formmethod') === 'dialog') {
      event.preventDefault();
      const returnValue = button.value || button.getAttribute('value') || '';
      this.close(returnValue); // Fecha o diálogo e define o returnValue
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
  }

  private handleDocumentKeyDown(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  }

  private async playAnimation(target: HTMLElement, animationName: string) {
    const animation = getAnimation(target, animationName, { dir: this.localize.dir() });
    if (animation) {
      const { keyframes, options } = animation;
      const anim = target.animate(keyframes, options);
      await anim.finished;
    }
  }

  private requestClose(source: CpsRequestClose['detail']['source']) {
    const slRequestClose = this.emit('cps-request-close', {
      cancelable: true,
      detail: { source }
    });

    if (slRequestClose.defaultPrevented) {
      this.playAnimation(this.panel, 'dialog.denyClose');
      return;
    }

    this.close(false);
  }

  private addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.addEventListener('submit', this.handleFormSubmission);
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    this.removeEventListener('submit', this.handleFormSubmission);
  }

  private handleFormSubmission(event: SubmitEvent) {
    const form = event.target as HTMLFormElement;

    // Verifica se o formulário tem method="dialog"
    if (form.method === 'dialog') {
      event.preventDefault();

      // Obtém o botão que acionou a submissão
      const submitter = event.submitter as HTMLButtonElement | null;

      if (submitter) {
        const returnValue = submitter.value || '';
        this.close(returnValue); // Fecha o diálogo e define o returnValue
      }
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      this.emit('cps-show');
      this.addOpenListeners();
      this.originalTrigger = document.activeElement as HTMLElement;
      this.modal.activate();

      lockBodyScrolling(this);

      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      this.dialog.hidden = false;

      await Promise.all([
        this.playAnimation(this.backdrop, 'dialog.backdrop.show'),
        this.playAnimation(this.panel, 'dialog.show')
      ]);

      const slInitialFocus = this.emit('cps-initial-focus', { cancelable: true });

      if (!slInitialFocus.defaultPrevented) {
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

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      const trigger = this.originalTrigger;

      await Promise.all([
        this.playAnimation(this.panel, 'dialog.hide'),
        this.playAnimation(this.backdrop, 'dialog.backdrop.hide')
      ]);

      this.dialog.hidden = true;
      unlockBodyScrolling(this);

      if (trigger instanceof HTMLElement && typeof trigger.focus === 'function') {
        trigger.focus({ preventScroll: true });
      }

      this.removeOpenListeners();
      this.modal.deactivate();

      this.emit('cps-after-close');
    }
  }

  /** Mostra a caixa de diálogo. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.returnValue = undefined;
    this.open = true;
    return waitForEvent(this, 'cps-after-show');
  }

  /** Fecha a caixa de diálogo, opcionalmente definindo um valor de retorno. */
  async close(returnValue?: string | boolean) {
    if (!this.open) {
      return undefined;
    }

    if (returnValue !== undefined) {
      this.returnValue = returnValue;
    }

    this.open = false;
    return waitForEvent(this, 'cps-after-close');
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
          dialog: true,
          'dialog--has-body': hasBodySlot,
          'dialog--has-footer': hasFooterSlot,
          'dialog--has-header': hasLabelText || hasLabelSlot,
          'dialog--open': this.open
        })}
      >
        <div part="backdrop" class="dialog__backdrop" @click=${() => this.requestClose('backdrop')} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-label=${ifDefined(this.ariaLabel || (hasLabelText ? this.label : undefined))}
          aria-labelledby=${ifDefined(this.ariaLabel || (hasLabelSlot ? 'title' : undefined))}
          tabindex="0"
        >
          ${hasLabelText || hasLabelSlot
            ? html`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label">${hasLabelText ? this.label : String.fromCharCode(65279)}</slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    ${this.closable
                      ? html`
                          <cps-icon-button
                            part="close-button"
                            exportparts="base:close-button__base"
                            class="dialog__close"
                            name="dismiss"
                            label=${this.localize.term('close')}
                            library="system"
                            @click="${() => this.requestClose('header')}"
                          ></cps-icon-button>
                        `
                      : ''}
                  </div>
                </header>
              `
            : ''}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('dialog.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 200, easing: 'ease-out' }
});

setDefaultAnimation('dialog.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 100, easing: 'ease-in' }
});

setDefaultAnimation('dialog.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 350 }
});

setDefaultAnimation('dialog.backdrop.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 150 }
});

setDefaultAnimation('dialog.backdrop.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

/**
 * Displays an alert dialog using a `CpsDialog` instance.
 * @see https://cpsrepositorio.github.io/cps-elements/#/componentes/dialog
 * @param {string} message - The message to display in the dialog body.
 * @param {string} [title] - Optional title for the dialog
 * @param {string} [button] - Optional text for the button, defaults to "OK".
 * @returns {Promise<void>} Resolves when the dialog is closed.
 */
export async function showAlert(message: string, title: string = '', button: string = 'OK'): Promise<void> {
  const dialog = document.createElement('cps-dialog');
  dialog.label = title;
  dialog.ariaLabel = title || 'Alert';
  dialog.innerHTML = `${message}<cps-button slot="footer" autofocus>${button}</cps-button>`;
  document.body.appendChild(dialog);
  const closeButton = dialog.querySelector('cps-button[slot="footer"]');

  return new Promise(resolve => {
    const onClose = () => {
      dialog.close();
    };

    const onAfterClose = () => {
      dialog.removeEventListener('cps-after-close', onAfterClose);
      dialog.remove();
      resolve();
    };

    dialog.addEventListener('cps-after-close', onAfterClose);
    closeButton?.addEventListener('click', onClose);

    requestAnimationFrame(() => dialog.show());
  });
}

/**
 * Displays a confirm dialog using a `CpsDialog` instance.
 * @see https://cpsrepositorio.github.io/cps-elements/#/componentes/dialog
 * @param {string} message - The message to display in the dialog body.
 * @param {string} [title] - Optional title for the dialog.
 * @param {string} [buttonYes] - Optional text for the confirmation button, defaults to "Yes".
 * @param {string} [buttonNo] - Optional text for the cancelation button, defaults to "No".
 * @returns {Promise<boolean>} Resolves to `true` if the user confirms, `false` otherwise.
 */
export async function showConfirm(
  message: string,
  title: string = '',
  buttonYes: string = 'Confirmar',
  buttonNo: string = 'Cancelar'
): Promise<boolean> {
  const dialog = document.createElement('cps-dialog');
  dialog.label = title;
  dialog.ariaLabel = title || 'Confirmation';
  dialog.innerHTML = `
    ${message}
    <cps-button slot="footer" variant="accent" autofocus>${buttonYes}</cps-button>
    <cps-button slot="footer">${buttonNo}</cps-button>
  `;
  document.body.appendChild(dialog);
  const yesButton = dialog.querySelector('cps-button[slot="footer"][variant="accent"]');
  const noButton = dialog.querySelector('cps-button[slot="footer"]:not([variant="accent"])');

  return new Promise(resolve => {
    const onClose = (result: boolean) => {
      dialog.close(result);
    };

    const onAfterClose = () => {
      dialog.removeEventListener('cps-after-close', onAfterClose);
      dialog.remove();
      resolve(dialog.returnValue as boolean);
    };

    dialog.addEventListener('cps-after-close', onAfterClose);
    yesButton?.addEventListener('click', () => onClose(true));
    noButton?.addEventListener('click', () => onClose(false));

    requestAnimationFrame(() => dialog.show());
  });
}

export { CpsDialog };

declare global {
  interface HTMLElementTagNameMap {
    'cps-dialog': CpsDialog;
  }
}
