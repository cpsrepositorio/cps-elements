import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../internal/slot';
import { html, literal } from 'lit/static-html.js';
import BaseElement from '../internal/base-element';
import styles from './badge/badge.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Distintivos (_badges_) são usados para chamar atenção de forma sutil
 * e não intrusiva, comumente para exibição de notificações de _status_,
 * indicação de novo conteúdo ou contagens.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/badge
 * @status stable
 * @since 0.2
 *
 * @dependency cps-icon
 *
 * @slot - O conteúdo do _badge_.
 *
 * @csspart base - O elemento principal propriamente dito.
 */
@customElement('cps-badge')
export default class CpsBadge extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]');

  /** A variante temática do _badge_. */
  @property({ reflect: true }) variant: 'neutral' | 'informative' | 'warning' | 'critical' | 'success' = 'neutral';

  /** Exibe ícone automático de acordo com a variante, ao invés de permitir conteúdo arbitrário no _badge_. */
  @property({ type: Boolean, reflect: true }) icon = false;

  /** Força o _badge_ a um formato retangular, sem arredondamento de bordas. */
  @property({ type: Boolean, reflect: true }) square = false;

  /** Efeito pulsante para chamar atenção extra. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  private hasSingleCharacter() {
    return (
      !this.icon &&
      [...this.childNodes]
        .filter(node => node.nodeType === node.TEXT_NODE)
        .some(node => {
          return node.textContent!.trim().length === 1;
        })
    );
  }

  private hasIcon() {
    return (
      this.icon ||
      [...this.childNodes]
        .filter(node => node.nodeType === node.ELEMENT_NODE)
        .some(node => {
          const tagName = (node as HTMLElement).tagName.toLowerCase();
          return tagName === 'cps-icon';
        })
    );
  }

  render() {
    const tag = this.icon ? literal`span` : literal`slot`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          badge: true,
          'badge--neutral': this.variant === 'neutral',
          'badge--informative': this.variant === 'informative',
          'badge--warning': this.variant === 'warning',
          'badge--critical': this.variant === 'critical',
          'badge--success': this.variant === 'success',
          'badge--square': this.square,
          'badge--pulse': this.pulse,
          'badge--has-icon': this.hasIcon(),
          'badge--has-content': this.hasSlotController.test('[default]'),
          'badge--has-single-character': this.hasSingleCharacter()
        })}
        role="status"
      >
        ${this.icon ? html` <cps-icon library="system" .name=${`${this.variant}-badge`}></cps-icon> ` : ''}
      </${tag}>
    `;
  }
}

export { CpsBadge };

declare global {
  interface HTMLElementTagNameMap {
    'cps-badge': CpsBadge;
  }
}
