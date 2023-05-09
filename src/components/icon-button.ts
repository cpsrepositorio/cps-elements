import './icon';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import BaseElement from '../internal/base-element';
import styles from './icon-button/icon-button.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Botões de ícone são simples, apenas um ícone dentro,
 *          normalmente para uso dentro de outros componentes.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/icon-button
 * @status stable
 * @since 0.2
 *
 * @dependency cps-icon
 *
 * @event cps-blur - Emitido quando o botão perde o foco.
 * @event cps-focus - Emitido quando o botão obtém o foco.
 *
 * @csspart base - O elemento principal propriamente dito (que pode ser `<button>` ou `<a>`).
 * @csspart icon - O ícone do botão (um `<cps-icon>`).
 */
@customElement('cps-icon-button')
export default class CpsIconButton extends BaseElement {
  static styles: CSSResultGroup = styles;

  @query('.icon-button') button: HTMLButtonElement | HTMLLinkElement;

  @state() private isFocused = false;

  /** O tamanho do botão. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Descrição alternativa para ferramentas de acessibilidade. Não omita este atributo,
   * pois botões são elementos de interação e, desta forma, precisam ser lidos apropriadamente
   * por ferramentas de acessibilidade.
   */
  @property() label = '';

  /**
   * Nome do ícone a renderizar. Os nomes disponíveis dependem da biblioteca de ícones que está sendo utilizada.
   */
  @property() name?: string;

  /**
   * Nome da biblioteca previamente registrada, a ser utilizada para carregar este ícone,
   * através de seu `name`. Se omitido, a biblioteca `default` é utilizada.
   */
  @property() library?: string;

  /**
   * URL de um arquivo SVG externo a carregar como ícone. Tenha certeza de confiar no conteúdo do arquivo que está
   * incorporando, uma vez que seu código interno será executado pelo navegador, o que pode proporcionar ataques XSS
   * se for carregado um arquivo malicioso.
   */
  @property() src?: string;

  /** Quando definido, o botão será renderizado como um elemento `<a>` com este `href` definido, ao invés de um elemento `<button>`. */
  @property() href = '';

  /** Informa o navegador qual o alvo de abertura do _link_. Usado somente se `href` estiver presente. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  /**
   * Quando usando `href`, este atributo irá mapear o valor do atributo `rel` subjacente com o valor
   * padrão `noreferrer noopener`, por questões de segurança. No entanto, se você estiver usando `target`
   * para apontar para uma guia/janela específica, isso impedirá que ele funcione corretamente.
   * Para este cenário específico, defina como vazio ou altere o valor de `rel` para outro valor.
   */
  @property() rel = 'noreferrer noopener';

  /** Informa o navegador para baixar o arquivo vinculado, com o nome definido aqui. Usado somente se `href` estiver presente. */
  @property() download?: string;

  /** Desabilita o botão. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  private handleBlur() {
    this.isFocused = false;
    this.emit('cps-blur');
  }

  private handleFocus() {
    this.isFocused = true;
    this.emit('cps-focus');
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /** Simula um _click_ no botão. */
  click() {
    this.button.click();
  }

  /** Coloca o foco no botão. */
  focus(options?: FocusOptions) {
    this.button.focus(options);
  }

  /** Remove o foco do botão. */
  blur() {
    this.button.blur();
  }

  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? literal`a` : literal`button`;

    /* eslint-disable lit/binding-positions, lit/no-invalid-html */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          'icon-button': true,
          'icon-button--small': this.size === 'small',
          'icon-button--medium': this.size === 'medium',
          'icon-button--large': this.size === 'large',
          'icon-button--disabled': !isLink && this.disabled,
          'icon-button--focused': this.isFocused
        })}
        ?disabled=${ifDefined(isLink ? undefined : this.disabled)}
        type=${ifDefined(isLink ? undefined : 'button')}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink ? this.rel : undefined)}
        role=${ifDefined(isLink ? undefined : 'button')}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label="${this.label}"
        tabindex=${this.disabled ? '-1' : '0'}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <cps-icon
          part="icon"
          class="icon-button__icon"
          name=${ifDefined(this.name)}
          library=${ifDefined(this.library)}
          src=${ifDefined(this.src)}
          aria-hidden="true"
        ></cps-icon>
      </${tag}>
    `;
  }
}

export { CpsIconButton };

declare global {
  interface HTMLElementTagNameMap {
    'cps-icon-button': CpsIconButton;
  }
}
