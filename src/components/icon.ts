import { customElement, property, state } from 'lit/decorators.js';
import { getIconLibrary, unwatchIcon, watchIcon } from './icon/library';
import { html } from 'lit';
import { requestIcon } from './icon/request';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { watch } from '../internal/watch';
import BaseElement from '../internal/base-element';
import styles from './icon/icon.styles';
import type { CSSResultGroup } from 'lit';

let parser: DOMParser;

/**
 * @summary Ícones são símbolos gráficos para representação de ações ou informações em uma interface.
 * @documentation https://cpsrepositorio.github.io/cps-elements/components/icon
 * @status stable
 * @since 0.1
 *
 * @event cps-load - Emitido quando o ícone foi carregado.
 * @event cps-error - Emitido quando o ícone falha para carregar devido a um erro.
 *
 * @csspart svg - O elemento SVG renderizado.
 */
@customElement('cps-icon')
export default class CpsIcon extends BaseElement {
  static styles: CSSResultGroup = styles;

  @state() private svg = '';

  /** Nome do ícone a renderizar. Os nomes disponíveis dependem da biblioteca de ícones que está sendo utilizada. */
  @property({ reflect: true }) name?: string;

  /**
   * URL de um arquivo SVG externo a carregar como ícone. Tenha certeza de confiar no conteúdo do arquivo que está
   * incorporando, uma vez que seu código interno será executado pelo navegador, o que pode proporcionar ataques XSS
   * se for carregado um arquivo malicioso.
   */
  @property() src?: string;

  /**
   * Descrição alternativa para ferramentas de acessibilidade.
   * Se omitido, será um ícone puramente visual, ignorado por tecnologias assistivas.
   */
  @property() label = '';

  /**
   * Nome da biblioteca previamente registrada, a ser utilizada para carregar este ícone,
   * através de seu `name`. Se omitido, a biblioteca `default` é utilizada.
   */
  @property({ reflect: true }) library = 'default';

  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }

  firstUpdated() {
    this.setIcon();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }

  private getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    }
    return this.src;
  }

  @watch('label')
  handleLabelChange() {
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;

    if (hasLabel) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
      this.removeAttribute('aria-hidden');
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
      this.setAttribute('aria-hidden', 'true');
    }
  }

  @watch(['name', 'src', 'library'])
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();

    // Create an instance of the DOM parser. We do it here instead of top-level to support SSR while maintaining a
    // single parser instance for optimal performance.
    if (!parser) {
      parser = new DOMParser();
    }

    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          // If the url has changed while fetching the icon, ignore this request
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          const svgEl = doc.body.querySelector('svg');

          if (svgEl !== null) {
            svgEl.part.add('svg');
            library?.mutator?.(svgEl);
            this.svg = svgEl.outerHTML;
            this.emit('cps-load');
          } else {
            this.svg = '';
            this.emit('cps-error');
          }
        } else {
          this.svg = '';
          this.emit('cps-error');
        }
      } catch {
        this.emit('cps-error');
      }
    } else if (this.svg.length > 0) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = '';
    }
  }

  render() {
    return html` ${unsafeSVG(this.svg)} `;
  }
}

export { CpsIcon };

declare global {
  interface HTMLElementTagNameMap {
    'cps-icon': CpsIcon;
  }
}
