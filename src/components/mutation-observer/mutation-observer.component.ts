import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './mutation-observer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary O utilitário observador de mutação (_mutation observer_) oferece uma alternativa com sintaxe declarativa para a API nativa [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/mutation-observer
 * @status stable
 * @since 0.25.0
 *
 * @event {{ mutationList: MutationRecord[] }} cps-mutation - Emitido quando ocorre uma mutação.
 *
 * @slot - O conteúdo a ser observado para mutações.
 */
@customElement('cps-mutation-observer')
export default class CpsMutationObserver extends BaseElement {
  static styles: CSSResultGroup = styles;

  private mutationObserver: MutationObserver;

  /**
   * Observa alterações em atributos.
   * Para observar todos os atributos, use `*`.
   * Para atributos específicos, separe-os por vírgula, por exemplo, `attr="class,id,title"`.
   */
  @property({ reflect: true }) attr: string;

  /** Indica se o valor anterior do atributo deve ser registrado ao monitorar alterações. */
  @property({ attribute: 'attr-old-value', type: Boolean, reflect: true }) attrOldValue = false;

  /** Observa alterações nos dados de caracteres textuais contidos no nó. */
  @property({ attribute: 'char-data', type: Boolean, reflect: true }) charData = false;

  /** Indica se o valor anterior do texto do nó deve ser registrado. */
  @property({ attribute: 'char-data-old-value', type: Boolean, reflect: true }) charDataOldValue = false;

  /** Observa a adição ou remoção de novos nós filhos. */
  @property({ attribute: 'child-list', type: Boolean, reflect: true }) childList = false;

  /** Desativa o observador. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleMutation = this.handleMutation.bind(this);

    this.mutationObserver = new MutationObserver(this.handleMutation);

    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback() {
    this.stopObserver();
  }

  private handleMutation(mutationList: MutationRecord[]) {
    this.emit('cps-mutation', {
      detail: { mutationList }
    });
  }

  private startObserver() {
    const observeAttributes = typeof this.attr === 'string' && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== '*' ? this.attr.split(',') : undefined;

    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch {
      // A mutation observer was created without some required attribute: attr, char-data, or child-list.
      // The browser usually throws an error in this case. We suppress to avoid errors appearing,
      // as attributes are usually added and removed individually.
    }
  }

  private stopObserver() {
    this.mutationObserver.disconnect();
  }

  @watch('disabled')
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  @watch('attr', { waitUntilFirstUpdate: true })
  @watch('attr-old-value', { waitUntilFirstUpdate: true })
  @watch('char-data', { waitUntilFirstUpdate: true })
  @watch('char-data-old-value', { waitUntilFirstUpdate: true })
  @watch('childList', { waitUntilFirstUpdate: true })
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }

  render() {
    return html` <slot></slot> `;
  }
}

export { CpsMutationObserver };

declare global {
  interface HTMLElementTagNameMap {
    'cps-mutation-observer': CpsMutationObserver;
  }
}
