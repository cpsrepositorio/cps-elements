import { expect, fixture, html } from '@open-wc/testing';

describe('<cps-resize-observer>', () => {
  it('renders the component', async () => {
    const el = await fixture(html` <cps-resize-observer></cps-resize-observer> `);

    expect(el).to.exist;
  });
});
