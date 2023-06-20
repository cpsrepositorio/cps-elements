import { expect, fixture, html } from '@open-wc/testing';
import type CpsLabel from '../label';

describe('<cps-label>', () => {
  it('should render default label', async () => {
    const el = await fixture<CpsLabel>(html` <cps-label>Test</cps-label> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('size')).to.equal('body');
    expect(base.getAttribute('class')).to.equal(' label label--primary label--body ');
  });

  it('should set variant by attribute', async () => {
    const el = await fixture<CpsLabel>(html` <cps-label variant="secondary">Test</cps-label> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' label label--secondary label--body ');
  });

  it('should set size by attribute', async () => {
    const el = await fixture<CpsLabel>(html` <cps-label size="title">Test</cps-label> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' label label--primary label--title ');
  });
});
