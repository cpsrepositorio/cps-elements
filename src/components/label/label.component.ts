import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import BaseElement from '../../internal/base-element.js';
import styles from './label.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Rótulos (_labels_) representam uma etiqueta textual para um item na interface.
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/label
 * @status stable
 * @since 0.6
 *
 * @slot - O conteúdo do _label_.
 *
 * @csspart base - O elemento principal propriamente dito (por padrão um `<span>`, podendo ser modificado com o atributo `tag`).
 * @csspart content - O `<slot>` de conteúdo interno do _label_.
 */
@customElement('cps-label')
export default class CpsLabel extends BaseElement {
  static styles: CSSResultGroup = styles;

  /** A variante temática do _label_. */
  @property({ reflect: true }) variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'brand-primary'
    | 'brand-secondary'
    | 'brand-tertiary'
    | 'inverted-primary'
    | 'inverted-secondary'
    | 'inverted-disabled' = 'primary';

  /** O tamanho do texto do _label_. Por padrão, o tamanho é herdado do elemento pai. */
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

  /** O elemento HTML desejado para a renderização do _label_. */
  @property({ reflect: true }) tag: 'span' | 'small' | 'i' | 'b' | 'em' | 'strong' | 'label' | 'p' | 'div' = 'span';

  render() {
    const className = classMap({
      label: true,

      // Variants
      'label--primary': this.variant === 'primary',
      'label--secondary': this.variant === 'secondary',
      'label--tertiary': this.variant === 'tertiary',
      'label--disabled': this.variant === 'disabled',
      'label--brand-primary': this.variant === 'brand-primary',
      'label--brand-secondary': this.variant === 'brand-secondary',
      'label--brand-tertiary': this.variant === 'brand-tertiary',
      'label--inverted-primary': this.variant === 'inverted-primary',
      'label--inverted-secondary': this.variant === 'inverted-secondary',
      'label--inverted-disabled': this.variant === 'inverted-disabled',

      // Sizes
      'label--inherit': this.size === 'inherit',
      'label--stamp': this.size === 'stamp',
      'label--caption': this.size === 'caption',
      'label--label': this.size === 'label',
      'label--body': this.size === 'body',
      'label--body-em': this.size === 'body-emphasized',
      'label--body-strong': this.size === 'body-strong',
      'label--body-large': this.size === 'body-large',
      'label--subtitle': this.size === 'subtitle',
      'label--title': this.size === 'title',
      'label--heading': this.size === 'heading',
      'label--display': this.size === 'display'
    });

    const slot = html`<slot part="content" class="label__content"></slot>`;

    switch (this.tag) {
      case 'small':
        return html`<small part="base" class=${className}>${slot}</small>`;
      case 'i':
        return html`<i part="base" class=${className}>${slot}</i>`;
      case 'b':
        return html`<b part="base" class=${className}>${slot}</b>`;
      case 'em':
        return html`<em part="base" class=${className}>${slot}</em>`;
      case 'strong':
        return html`<strong part="base" class=${className}>${slot}</strong>`;
      case 'label':
        return html`<label part="base" class=${className}>${slot}</label>`;
      case 'p':
        return html`<p part="base" class=${className}>${slot}</p>`;
      case 'div':
        return html`<div part="base" class=${className}>${slot}</div>`;
      default:
        return html`<span part="base" class=${className}>${slot}</span>`;
    }
  }
}

export { CpsLabel };

declare global {
  interface HTMLElementTagNameMap {
    'cps-label': CpsLabel;
  }
}
