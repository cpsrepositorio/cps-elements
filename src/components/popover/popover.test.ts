import { expect, fixture, html } from '@open-wc/testing';

describe('<cps-popover>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <cps-popover></cps-popover> `);

    expect(el).to.exist;
  });
});
