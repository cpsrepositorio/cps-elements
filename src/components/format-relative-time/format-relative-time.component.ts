import { availableUnits, getTimeUntilNextUnit } from './helpers.js';
import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import BaseElement from '../../internal/base-element.js';

/**
 * @summary Exibe uma frase de tempo localizada relativamente à data e hora atuais.
 *
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/utilitários/format-relative-time
 * @status stable
 * @since 0.16.0
 */
@customElement('cps-format-relative-time')
export default class CpsFormatRelativeTime extends BaseElement {
  private readonly localize = new LocalizeController(this);
  private updateTimeout: number;

  @state() private isoTime = '';
  @state() private relativeTime = '';
  @state() private titleTime = '';

  /**
   * A data a partir da qual calcular o tempo. Se não for definida, a data e hora atuais serão usadas.
   * Ao passar um texto, é altamente recomendado usar o formato ISO 8601 para garantir
   * que os fusos horários sejam tratados corretamente. Para converter uma data para este
   * formato em JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
   */
  @property() date: Date | string = new Date();

  /**
   * O estilo de formatação a ser usado.
   * Alguns idiomas exibem os mesmos valores entre os formatos, exatamente o caso do português.
   */
  @property() format: 'long' | 'short' | 'narrow' = 'long';

  /**
   * Quando `false`, valores textuais, como "ontem" e "amanhã", serão usados quando possível.
   * Quando `true`, somente números explícitos, como "há 1 dia" e "em 1 dia", serão usados.
   */
  @property({ type: Boolean }) numeric = false;

  /** Mantém o valor exibido atualizado conforme o tempo passa. */
  @property({ type: Boolean }) sync = false;

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.updateTimeout);
  }

  render() {
    const now = new Date();
    const then = new Date(this.date);

    if (isNaN(then.getMilliseconds())) {
      this.relativeTime = '';
      this.isoTime = '';
      return '';
    }

    const diff = then.getTime() - now.getTime();
    const { unit, value } = availableUnits.find(singleUnit => Math.abs(diff) < singleUnit.max)!;

    this.isoTime = then.toISOString();
    this.titleTime = this.localize.date(then, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    });

    this.relativeTime = this.localize.relativeTime(Math.round(diff / value), unit, {
      numeric: this.numeric ? 'always' : 'auto',
      style: this.format
    });

    // If sync is enabled, update as time passes
    clearTimeout(this.updateTimeout);

    if (this.sync) {
      let nextInterval: number;

      // NOTE: this could be optimized to determine when the next update should actually occur, but the size and cost of
      // that logic probably isn't worth the performance benefit
      if (unit === 'minute') {
        nextInterval = getTimeUntilNextUnit('second');
      } else if (unit === 'hour') {
        nextInterval = getTimeUntilNextUnit('minute');
      } else if (unit === 'day') {
        nextInterval = getTimeUntilNextUnit('hour');
      } else {
        nextInterval = getTimeUntilNextUnit('day');
      }

      this.updateTimeout = window.setTimeout(() => this.requestUpdate(), nextInterval);
    }

    return html` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `;
  }
}

export { CpsFormatRelativeTime };

declare global {
  interface HTMLElementTagNameMap {
    'cps-format-relative-time': CpsFormatRelativeTime;
  }
}
