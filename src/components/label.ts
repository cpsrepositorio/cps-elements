import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html, literal } from 'lit/static-html.js';
import BaseElement from '../internal/base-element';
import styles from './label/label.styles';
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

  /** O tamanho do _label_. */
  @property({ reflect: true }) size:
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
    | 'display' = 'body';

  /** O elemento HTML desejado para a renderização do _label_. */
  @property({ reflect: true }) tag: 'span' | 'small' | 'i' | 'b' | 'em' | 'strong' | 'label' | 'p' | 'div' = 'span';

  render() {
    const tag = {
      span: literal`span`,
      small: literal`small`,
      i: literal`i`,
      b: literal`b`,
      em: literal`em`,
      strong: literal`strong`,
      label: literal`label`,
      p: literal`p`,
      div: literal`div`
    }[this.tag];

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class=${classMap({
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
        })}
      >
        <slot part="content" class="label__content"></slot>
      </${tag}>
    `;
  }
}

export { CpsLabel };

declare global {
  interface HTMLElementTagNameMap {
    'cps-label': CpsLabel;
  }
}
