import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { requestInclude } from './request.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './include.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Possibilita a inclusão de arquivos HTML externos diretamente no conteúdo da página.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/include
 * @status stable
 * @since 0.1
 *
 * @event cps-load - Emitido quando o arquivo incluído foi carregado.
 * @event {{ status: number }} cps-error - Emitido quando o arquivo incluído falha durante o carregamento.
 */
@customElement('cps-include')
export default class CpsInclude extends BaseElement {
  static styles: CSSResultGroup = styles;

  /**
   * A localização do arquivo HTML a ser incluído. Tenha certeza de que pode confiar no conteúdo
   * que você está incluindo, já que será executado como código no navegador após o carregamento,
   * o que implica em possíveis ataques XSS.
   */
  @property() src: string;

  /** O modo _cross origin_ a ser utilizado para o carregamento do arquivo. */
  @property() mode: 'cors' | 'no-cors' | 'same-origin' = 'cors';

  /**
   * Permite que _scripts_ incluídos no HTML importado sejam executados. Tenha certeza de que pode
   * confiar no conteúdo que você está incluindo, já que será executado como código no navegador
   * após o carregamento, o que implica em possíveis ataques XSS.
   */
  @property({ attribute: 'allow-scripts', type: Boolean }) allowScripts = false;

  private executeScript(script: HTMLScriptElement) {
    // Create a copy of the script and swap it out so the browser executes it
    const newScript = document.createElement('script');
    [...script.attributes].forEach(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode!.replaceChild(newScript, script);
  }

  @watch('src')
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);

      // If the src changed since the request started do nothing, otherwise we risk overwriting a subsequent response
      if (src !== this.src) {
        return;
      }

      if (!file.ok) {
        this.emit('cps-error', { detail: { status: file.status } });
        return;
      }

      this.innerHTML = file.html;

      if (this.allowScripts) {
        [...this.querySelectorAll('script')].forEach(script => this.executeScript(script));
      }

      this.emit('cps-load');
    } catch {
      this.emit('cps-error', { detail: { status: -1 } });
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

export { CpsInclude };

declare global {
  interface HTMLElementTagNameMap {
    'cps-include': CpsInclude;
  }
}
