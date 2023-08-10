import { expect, fixture, html } from '@open-wc/testing';
import type CpsMenuLabel from '../menu-label';

describe('<cps-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<CpsMenuLabel>(html` <cps-menu-label>Test</cps-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
