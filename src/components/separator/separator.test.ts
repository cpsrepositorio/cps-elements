import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import type CpsSeparator from '../separator';

describe('<cps-separator>', () => {
  describe('defaults ', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<CpsSeparator>(html` <cps-separator></cps-separator> `);
      await expect(el).to.be.accessible();
    });

    it('default properties', async () => {
      const el = await fixture<CpsSeparator>(html` <cps-separator></cps-separator> `);
      const base = el.shadowRoot?.querySelector('[part="base"]');

      expect(el.vertical).to.be.false;
      expect(base?.getAttribute('role')).to.equal('separator');
      expect(base?.getAttribute('aria-orientation')).to.equal('horizontal');
    });
  });

  describe('vertical property change ', () => {
    it('aria-orientation is updated', async () => {
      const el = await fixture<CpsSeparator>(html` <cps-separator></cps-separator> `);
      const base = el.shadowRoot?.querySelector('[part="base"]');

      el.vertical = true;
      await elementUpdated(el);

      expect(base?.getAttribute('aria-orientation')).to.equal('vertical');
    });
  });
});
