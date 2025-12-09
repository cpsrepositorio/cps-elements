import { expect, fixture, html } from '@open-wc/testing';

describe('<cps-mutation-observer>', () => {
  it('renders the component', async () => {
    const el = await fixture(html` <cps-mutation-observer></cps-mutation-observer> `);

    expect(el).to.exist;
  });
});
