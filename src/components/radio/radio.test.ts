import { expect, fixture, html } from '@open-wc/testing';
import type CpsRadio from '../radio';

describe('<cps-radio>', () => {
  it('should not get checked when disabled', async () => {
    const container = await fixture<HTMLDivElement>(html`
      <div>
        <cps-radio id="radio-1" checked></cps-radio>
        <cps-radio id="radio-2" disabled></cps-radio>
      </div>
    `);
    const radio1 = container.querySelector<CpsRadio>('#radio-1')!;
    const radio2 = container.querySelector<CpsRadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
