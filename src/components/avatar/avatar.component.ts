import '../icon.js';
import '../tooltip.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './avatar.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Avatares são usados para iconograficamente representar uma pessoa ou objeto.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/avatar
 * @status stable
 * @since 0.8
 *
 * @dependency cps-icon
 * @dependency cps-tooltip
 *
 * @slot badge - O distintivo informativo atrelado a este avatar. Recomenda-se utilizar `<cps-badge>` como conteúdo.
 * @slot icon - O ícone a ser usado quando nenhuma imagem ou iniciais estão presentes. Recomenda-se utilizar `<cps-icon>` como conteúdo.
 *
 * @csspart base - O elemento principal propriamente dito (um `<div>`).
 * @csspart icon - O elemento que embrulha a renderização do _slot_ `icon`.
 * @csspart initials - O elemento que embrulha a renderização das iniciais.
 * @csspart image - A imagem do avatar (um `<img>`). Exibido apenas quando o atributo `image` está presente.
 *
 * @cssproperty --size - A medida de tamanho do avatar. Utilizada tanto como `width` quanto `height`, corresponde a `2em` quando o atributo `size` é igual a `inherit`.
 */
@customElement('cps-avatar')
export default class CpsAvatar extends BaseElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  @state() private hasError = false;
  @state() private generatedInitials = '';
  @state() private generatedBackground = '';

  /** O caminho da imagem principal a ser utilizada como avatar. */
  @property({ reflect: true }) src = '';

  /** O atributo `srcset` opcional do elemento `<img>`, para diferentes resoluções ou tamanhos de imagem. */
  @property({ reflect: true }) srcset = '';

  /**
   * Um rótulo que descreve a imagem, comumente o nome da entidade representada pelo avatar (por exemplo,
   * o nome de uma pessoa). Também é utilizado para geração de iniciais, caso `initials` seja `auto`.
   * Mesmo que não seja, considere como um atributo obrigatório, para acessibilidade apropriada do avatar.
   */
  @property({ reflect: true }) label = '';

  /**
   * Quando vazio (o padrão), nenhuma inicial é exibida, e o _slot_ `icon` é utilizado.
   * Quando `auto`, as iniciais são geradas automaticamente a partir do `label`.
   * Caso contrário, as iniciais são definidas explicitamente neste atributo.
   */
  @property({ reflect: true }) initials: 'auto' | string = '';

  /** O atributo `loading` do elemento `<img>` que exibe a imagem do avatar. */
  @property({ reflect: true }) loading: 'eager' | 'lazy' = 'lazy';

  /** Define a forma do avatar, circular por padrão. */
  @property({ reflect: true }) shape: 'circle' | 'square' | 'rounded' = 'circle';

  /**
   * Quando `auto` (o padrão), a cor de fundo do avatar é gerada automaticamente a partir do `label`.
   * Quando `none`, nenhuma cor de fundo é exibida (usando então um cinza neutro intermediário).
   * Caso contrário, a cor de fundo é definida explicitamente neste atributo.
   */
  @property({ reflect: true }) color: 'auto' | 'none' | string = 'auto';

  /** Se verdadeiro, desativa completamente a exibição de dica de ferramenta com o conteúdo do `label`. */
  @property({ type: Boolean, attribute: 'no-tooltip', reflect: true }) noTooltip = false;

  /** O tamanho do avatar. Por padrão, o tamanho é calculado como o dobro do tamanho de fonte do elemento pai. */
  @property({ reflect: true }) size:
    | 'inherit'
    | 'stamp'
    | 'caption'
    | 'label'
    | 'body'
    | 'body-emphasized'
    | 'body-strong'
    | 'body-large'
    | 'subtitle'
    | 'title'
    | 'heading'
    | 'display' = 'inherit';

  @watch('src')
  handleSrcChange() {
    this.hasError = false;
  }

  handleImageError() {
    this.hasError = true;
  }

  @watch(['label', 'initials'])
  handleLabelChange() {
    this.updateInitials();
  }

  @watch(['src', 'label', 'color', 'hasError'])
  handleRangeChanges() {
    this.updateBackground();
  }

  private updateInitials() {
    if (this.initials === '') {
      this.generatedInitials = '';
    } else if (this.initials === 'auto') {
      const words = this.label.replace(/\s+/g, ' ').trim().split(' ');
      if (!words.length) this.generatedInitials = '';
      else if (words.length === 1) this.generatedInitials = words[0][0]?.toUpperCase() ?? '';
      else this.generatedInitials = `${words[0][0]}${words.slice(-1)[0][0]}`.toUpperCase();
    } else {
      this.generatedInitials = this.initials.substring(0, 2).toUpperCase();
    }
  }

  private updateBackground() {
    if ((this.src && !this.hasError) || this.color === 'none') {
      this.generatedBackground = '';
    } else if (this.color !== 'auto') {
      this.generatedBackground = this.color;
    } else {
      const hash = this.getHash(this.label);
      const h = this.normalizeHash(hash, 0, 360);
      const s = this.normalizeHash(hash, 20, 40);
      const l = this.normalizeHash(hash, 25, 45);
      this.generatedBackground = `hsl(${h}, ${s}%, ${l}%)`;
    }
  }

  private getHash(str: string) {
    const length = str.length - 1;
    let hash = 0;
    for (let i = length; i > -1; i--) {
      // eslint-disable-next-line no-bitwise
      hash = str.charCodeAt(i) + ((hash << 1) - hash);
    }
    hash = Math.abs(hash);
    return hash;
  }

  private normalizeHash(hash: number, min: number, max: number) {
    return Math.floor((hash % (max - min)) + min);
  }

  render() {
    const avatarWithImage = html`
      <img
        part="image"
        class="avatar__image"
        src="${this.src}"
        srcset="${this.srcset}"
        loading="${this.loading}"
        alt=""
        @error=${this.handleImageError}
      />
    `;

    let avatarWithoutImage = html``;

    if (this.generatedInitials) {
      avatarWithoutImage = html`<div part="initials" class="avatar__initials">${this.generatedInitials}</div>`;
    } else {
      avatarWithoutImage = html`
        <slot name="icon" part="icon" class="avatar__icon">
          <cps-icon aria-hidden="true" name="person" library="system"></cps-icon>
        </slot>
      `;
    }

    return html`
      <cps-tooltip content=${this.label} ?disabled=${this.noTooltip || !this.label}>
        <div
          part="base"
          class=${classMap({
            avatar: true,
            'avatar--rtl': this.localize.dir() === 'rtl',

            // Shapes
            'avatar--circle': this.shape === 'circle',
            'avatar--rounded': this.shape === 'rounded',
            'avatar--square': this.shape === 'square',

            // Sizes
            'avatar--inherit': this.size === 'inherit',
            'avatar--stamp': this.size === 'stamp',
            'avatar--caption': this.size === 'caption',
            'avatar--label': this.size === 'label',
            'avatar--body': this.size === 'body',
            'avatar--body-em': this.size === 'body-emphasized',
            'avatar--body-strong': this.size === 'body-strong',
            'avatar--body-large': this.size === 'body-large',
            'avatar--subtitle': this.size === 'subtitle',
            'avatar--title': this.size === 'title',
            'avatar--heading': this.size === 'heading',
            'avatar--display': this.size === 'display'
          })}
          role="img"
          tabindex="0"
          aria-label=${this.label ?? 'Avatar'}
          style=${this.generatedBackground ? `--avatar-background: ${this.generatedBackground}` : ''}
        >
          <slot name="badge"></slot>
          ${this.src && !this.hasError ? avatarWithImage : avatarWithoutImage}
        </div>
      </cps-tooltip>
    `;
  }
}

export { CpsAvatar };

declare global {
  interface HTMLElementTagNameMap {
    'cps-avatar': CpsAvatar;
  }
}
