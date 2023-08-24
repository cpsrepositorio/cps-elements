import { expect, fixture, html } from '@open-wc/testing';

describe('<cps-flyout>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <cps-flyout></cps-flyout> `);

    expect(el).to.exist;
  });
});
