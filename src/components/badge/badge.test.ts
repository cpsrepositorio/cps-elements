import { expect, fixture, html } from '@open-wc/testing';
import type CpsBadge from '../badge';

describe('<cps-badge>', () => {
  let el: CpsBadge;

  describe('when provided no parameters nor content', () => {
    before(async () => {
      el = await fixture<CpsBadge>(html` <cps-badge></cps-badge> `);
    });

    it('should pass accessibility tests with a role of status on the base part.', async () => {
      await expect(el).to.be.accessible();

      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.getAttribute('role')).to.eq('status');
    });

    it('should render no child content', () => {
      expect(el.innerText).to.eq('');
    });

    it('should default to rounded styling, with the neutral color and no content class', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.eq('badge badge--neutral');
    });
  });

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture<CpsBadge>(html` <cps-badge>Badge</cps-badge> `);
    });

    it('should pass accessibility tests with a role of status on the base part.', async () => {
      await expect(el).to.be.accessible();

      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.getAttribute('role')).to.eq('status');
    });

    it('should render the child content provided', () => {
      expect(el.innerText).to.eq('Badge');
    });

    it('should default to rounded styling, with the neutral color', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.eq('badge badge--neutral badge--has-content');
    });
  });

  describe('when provided no parameters with one character content', () => {
    before(async () => {
      el = await fixture<CpsBadge>(html` <cps-badge>1</cps-badge> `);
    });

    it('should pass accessibility tests with a role of status on the base part.', async () => {
      await expect(el).to.be.accessible();

      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.getAttribute('role')).to.eq('status');
    });

    it('should render the child content provided', () => {
      expect(el.innerText).to.eq('1');
    });

    it('should default to rounded styling, with the neutral color', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.eq('badge badge--neutral badge--has-content badge--has-single-character');
    });
  });

  describe('when provided a icon parameter', () => {
    before(async () => {
      el = await fixture<CpsBadge>(html` <cps-badge icon></cps-badge> `);
    });

    it('should pass accessibility tests with a role of status on the base part.', async () => {
      await expect(el).to.be.accessible();

      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.getAttribute('role')).to.eq('status');
    });

    it('should render the child icon', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      const icons = [...part.childNodes].filter(node => (node as HTMLElement).tagName?.toLowerCase() === 'cps-icon');
      expect(icons.length).to.eq(1);
    });

    it('should append the square class to the classlist to render a square', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.eq('badge badge--neutral badge--has-icon');
    });
  });

  describe('when provided a square parameter', () => {
    before(async () => {
      el = await fixture<CpsBadge>(html` <cps-badge square>Badge</cps-badge> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should append the square class to the classlist to render a square', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.eq('badge badge--neutral badge--square badge--has-content');
    });
  });

  describe('when provided a pulse parameter', () => {
    before(async () => {
      el = await fixture<CpsBadge>(html` <cps-badge pulse>Badge</cps-badge> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible();
    });

    it('should append the pulse class to the classlist to render a pulse', () => {
      const part = el.shadowRoot!.querySelector('[part~="base"]')!;
      expect(part.classList.value.trim()).to.eq('badge badge--neutral badge--pulse badge--has-content');
    });
  });

  ['neutral', 'informative', 'success', 'warning', 'critical'].forEach(variant => {
    describe(`when passed a variant attribute ${variant}`, () => {
      before(async () => {
        el = await fixture<CpsBadge>(html`<cps-badge variant="${variant}">Badge</cps-badge>`);
      });

      it('should pass accessibility tests', async () => {
        await expect(el).to.be.accessible();
      });

      it('should default to rounded styling, with the variant color', () => {
        const part = el.shadowRoot!.querySelector('[part~="base"]')!;
        expect(part.classList.value.trim()).to.eq(`badge badge--${variant} badge--has-content`);
      });
    });
  });
});
