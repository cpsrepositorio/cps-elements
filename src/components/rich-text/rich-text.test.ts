import { expect, fixture, html } from '@open-wc/testing';
import type CpsRichText from '../rich-text.js';

/** Conteúdo longo o bastante para estourar qualquer altura máxima usada nos testes. */
const longContent = `<p>${'Parágrafo de teste com conteúdo suficiente para gerar rolagem. '.repeat(200)}</p>`;
const shortContent = '<p>Texto curto.</p>';

describe('<cps-rich-text>', () => {
  describe('when the content is short', () => {
    let el: CpsRichText;

    before(async () => {
      el = await fixture<CpsRichText>(html` <cps-rich-text .value=${shortContent}></cps-rich-text> `);
    });

    it('should not scroll internally', () => {
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;

      expect(content.scrollHeight).to.be.at.most(content.clientHeight + 1);
    });

    it('should respect the minimum height of the editing area', () => {
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;
      const minHeight = 12 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      expect(content.getBoundingClientRect().height).to.be.at.least(minHeight - 1);
    });
  });

  describe('when no max height is defined and the content is long', () => {
    let el: CpsRichText;

    before(async () => {
      el = await fixture<CpsRichText>(html` <cps-rich-text .value=${longContent}></cps-rich-text> `);
    });

    it('should cap the editor at the default max height', () => {
      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
      const defaultMaxHeight = 28 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      expect(base.getBoundingClientRect().height).to.be.at.most(defaultMaxHeight + 1);
    });

    it('should move the vertical scrolling into the content area', () => {
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;

      expect(content.scrollHeight).to.be.greaterThan(content.clientHeight);
    });
  });

  describe('when the default max height is opted out of', () => {
    let el: CpsRichText;

    before(async () => {
      el = await fixture<CpsRichText>(
        html` <cps-rich-text style="--max-height: none" .value=${longContent}></cps-rich-text> `
      );
    });

    it('should grow with the content, without an internal scrollbar', () => {
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;

      expect(content.scrollHeight).to.be.closeTo(content.clientHeight, 2);
    });
  });

  describe('when a max height is defined', () => {
    let el: CpsRichText;

    before(async () => {
      el = await fixture<CpsRichText>(
        html` <cps-rich-text style="--max-height: 18rem" .value=${longContent}></cps-rich-text> `
      );
    });

    it('should cap the editor at the given max height', () => {
      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
      const maxHeight = 18 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      expect(base.getBoundingClientRect().height).to.be.at.most(maxHeight + 1);
    });

    it('should move the vertical scrolling into the content area', () => {
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;

      expect(content.scrollHeight).to.be.greaterThan(content.clientHeight);
    });

    it('should keep the toolbar outside of the scrollable area', () => {
      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
      const toolbar = el.shadowRoot!.querySelector<HTMLElement>('[part~="toolbar"]')!;
      const content = el.shadowRoot!.querySelector<HTMLElement>('[part~="content"]')!;

      // A barra não rola junto: continua encostada no topo do contêiner mesmo
      // depois de rolar a área de edição até o fim.
      content.scrollTop = content.scrollHeight;

      expect(toolbar.getBoundingClientRect().top).to.be.closeTo(base.getBoundingClientRect().top, 2);
    });
  });

  describe('when a min height is defined alongside a smaller max height', () => {
    let el: CpsRichText;

    before(async () => {
      el = await fixture<CpsRichText>(
        html` <cps-rich-text style="--max-height: 10rem; --min-height: 6rem" .value=${longContent}></cps-rich-text> `
      );
    });

    it('should let the editor shrink below the default floor', () => {
      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
      const maxHeight = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      expect(base.getBoundingClientRect().height).to.be.at.most(maxHeight + 1);
    });
  });
});
