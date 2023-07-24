import { expect, fixture, html } from '@open-wc/testing';
import type CpsSpinner from '../spinner.js';

describe('<cps-spinner>', () => {
  describe('when provided no parameters', () => {
    it('should pass accessibility tests', async () => {
      const spinner = await fixture<CpsSpinner>(html` <cps-spinner></cps-spinner> `);
      await expect(spinner).to.be.accessible();
    });

    it('should have a role of "status".', async () => {
      const spinner = await fixture<CpsSpinner>(html` <cps-spinner></cps-spinner> `);
      const base = spinner.shadowRoot!.querySelector('[part~="base"]')!;
      expect(base).have.attribute('role', 'progressbar');
    });

    it('should use "transform: rotate(x)" instead of "rotate: x" when animating', async () => {
      const spinner = await fixture<CpsSpinner>(html` <cps-spinner></cps-spinner> `);
      const indicator = spinner.shadowRoot!.querySelector('.spinner__indicator')!;
      expect(getComputedStyle(indicator).transform).to.equal('matrix(1, 0, 0, 1, 0, 0)');
    });
  });
});
