import '../flyout.js';
import { animateTo, parseDuration, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './tooltip.styles.js';
import type { CSSResultGroup } from 'lit';
import type CpsFlyout from '../flyout.js';

/**
 * @summary Dicas de ferramenta (_tooltips_) exibem informações adicionais contextuais.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/tooltip
 * @status stable
 * @since 0.5
 *
 * @dependency cps-flyout
 *
 * @slot - O elemento alvo da dica de ferramenta. Evite ter mais de um elemento alvo na hierarquia, pois os subsequentes serão ignorados (neste caso, embrulhe os vários elementos em uma _tag_ principal, como `<span>` ou `<div>`).
 * @slot content - O conteúdo a ser renderizado na dica de ferramenta. Alternativamente, você pode usar o atributo `content`.
 *
 * @event cps-show - Emitido quando a dica de ferramenta começa a ser exibida.
 * @event cps-after-show - Emitido após a dica de ferramenta ser exibida e todas as animações terem sido concluídas.
 * @event cps-hide - Emitido quando a dica de ferramenta começa a ser ocultada.
 * @event cps-after-hide - Emitido após a dica de ferramenta ser ocultada e todas as animações terem sido concluídas.
 *
 * @csspart base - O elemento base que embrulha o componente (um elemento `<cps-flyout>`).
 * @csspart base__container - A parte CSS `container` exportada do _flyout_ base. Use-a para atingir o contêiner do elemento `<cps-flyout>` base, para estilizações avançadas deste.
 * @csspart base__container - A parte CSS `arrow` exportada do _flyout_ base. Use-a para atingir a seta do elemento `<cps-flyout>` base, para estilizações avançadas desta.
 * @csspart body - O corpo da dica de ferramenta, onde seu conteúdo é renderizado.
 *
 * @cssproperty --max-width - O tamanho máximo da dica de ferramenta, antes que seu conteúdo seja quebrado em outra linha.
 * @cssproperty --hide-delay - A quantidade de tempo a esperar antes de ocultar a dica de ferramenta, ao tirar o ponteiro.
 * @cssproperty --show-delay - A quantidade de tempo a esperar antes de exibir a dica de ferramenta, ao colocar o ponteiro sobre.
 *
 * @animation tooltip.show - A animação a ser usada ao exibir a dica de ferramenta.
 * @animation tooltip.hide - A animação a ser usada ao ocultar a dica de ferramenta.
 */
@customElement('cps-tooltip')
export default class CpsTooltip extends BaseElement {
  static styles: CSSResultGroup = styles;

  private hoverTimeout: number;
  private readonly localize = new LocalizeController(this);

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('.tooltip__body') body: HTMLElement;
  @query('cps-flyout') flyout: CpsFlyout;

  /** O conteúdo da dica de ferramenta. Se precisar exibir conteúdo HTML ao invés de texto simples, use o _slot_ `content` em vez deste atributo. */
  @property() content = '';

  /**
   * O posicionamento preferido da dica de ferramenta.
   * Observe que o posicionamento real pode variar conforme necessário,
   * para manter a dica de ferramenta dentro da janela de visualização.
   */
  @property() placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'top';

  /** Desabilita a dica de ferramenta, para que ela não seja exibida quando o elemento alvo é interagido. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * A distância em pixels do _flyout_ em relação à seu elemento alvo, para afastá-lo ou aproximá-lo deste.
   * Por exemplo, se `placement` for `top` ou `bottom`, `distance` definirá a distância do _flyout_ no eixo vertical.
   */
  @property({ type: Number }) distance = 10;

  /**
   * A distância em pixels do _flyout_ no eixo de deslocamento de seu elemento alvo.
   * Por exemplo, se `placement` for `top` ou `bottom`, `skidding` definirá a distância do _flyout_ no eixo horizontal.
   */
  @property({ type: Number }) skidding = 0;

  /**
   * Indica se a dica de ferramenta está ou não visível atualmente.
   * Você pode usar isso declarativamente e reativamente, ao invés de precisar
   * imperativamente dos métodos `show` e `hide`.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Controla como a dica de ferramenta é ativada. As opções possíveis incluem `click`, `hover`, `focus` e `manual`.
   * Múltiplas opções podem ser passadas, separando-as com um espaço, exceto o valor `manual`.
   * Quando `manual` é usado, a dica de ferramenta deve ser exclusivamente manipulada programaticamente.
   */
  @property() trigger = 'hover focus';

  /**
   * Habilite esta opção para que a dica de ferramenta seja exibida em um contêiner de nível superior
   * (usualmente, o `<body>`), ao invés de ser renderizado junto ao seu elemento alvo.
   *
   * Isso é útil quando você precisa exibir conteúdo que pode ser cortado por um contêiner pai que
   * tenha `overflow` `hidden`, `scroll` ou `auto`, ou quando você precisa exibir a dica de ferramenta
   * em um contêiner com um `z-index` menor que o do seu elemento alvo.
   *
   * Içar usa uma estratégia de posicionamento fixo que funciona em muitos cenários,
   * mas não em todos, então teste com cautela se precisar habilitar.
   */
  @property({ type: Boolean }) hoist = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.updateComplete.then(() => {
      this.addEventListener('blur', this.handleBlur, true);
      this.addEventListener('focus', this.handleFocus, true);
      this.addEventListener('click', this.handleClick);
      this.addEventListener('keydown', this.handleKeyDown);
      this.addEventListener('mouseover', this.handleMouseOver);
      this.addEventListener('mouseout', this.handleMouseOut);
    });
  }

  firstUpdated() {
    this.body.hidden = !this.open;

    // If the tooltip is visible on init, update its position
    if (this.open) {
      this.flyout.active = true;
      this.flyout.reposition();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('blur', this.handleBlur, true);
    this.removeEventListener('focus', this.handleFocus, true);
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeEventListener('mouseover', this.handleMouseOver);
    this.removeEventListener('mouseout', this.handleMouseOut);
  }

  private handleBlur() {
    if (this.hasTrigger('focus')) {
      this.hide();
    }
  }

  private handleClick() {
    if (this.hasTrigger('click')) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  private handleFocus() {
    if (this.hasTrigger('focus')) {
      this.show();
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Pressing escape when the target element has focus should dismiss the tooltip
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.hide();
    }
  }

  private handleMouseOver() {
    if (this.hasTrigger('hover')) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue('--show-delay'));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.show(), delay);
    }
  }

  private handleMouseOut() {
    if (this.hasTrigger('hover')) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue('--hide-delay'));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
    }
  }

  private hasTrigger(triggerType: string) {
    const triggers = this.trigger.split(' ');
    return triggers.includes(triggerType);
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled) {
        return;
      }

      // Show
      this.emit('cps-show');

      await stopAnimations(this.body);
      this.body.hidden = false;
      this.flyout.active = true;
      const { keyframes, options } = getAnimation(this, 'tooltip.show', { dir: this.localize.dir() });
      await animateTo(this.flyout.container, keyframes, options);

      this.emit('cps-after-show');
    } else {
      // Hide
      this.emit('cps-hide');

      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, 'tooltip.hide', { dir: this.localize.dir() });
      await animateTo(this.flyout.container, keyframes, options);
      this.flyout.active = false;
      this.body.hidden = true;

      this.emit('cps-after-hide');
    }
  }

  @watch(['content', 'distance', 'hoist', 'placement', 'skidding'])
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.flyout.reposition();
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }

  /** Força a exibição imediata da dica de ferramenta. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'cps-after-show');
  }

  /** Força a ocultação imediata da dica de ferramenta. */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'cps-after-hide');
  }

  render() {
    return html`
      <cps-flyout
        part="base"
        exportparts="
          container:base__container,
          arrow:base__arrow
        "
        class=${classMap({
          tooltip: true,
          'tooltip--open': this.open
        })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? 'fixed' : 'absolute'}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open ? 'polite' : 'off'}
        >
          ${this.content}
        </slot>
      </cps-flyout>
    `;
  }
}

setDefaultAnimation('tooltip.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: 'ease' }
});

setDefaultAnimation('tooltip.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: 'ease' }
});

export { CpsTooltip };

declare global {
  interface HTMLElementTagNameMap {
    'cps-tooltip': CpsTooltip;
  }
}
