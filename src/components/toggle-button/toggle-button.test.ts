import { expect, fixture, html } from '@open-wc/testing';
import type CpsRadioGroup from '../radio-group.js';
import type CpsToggleButton from '../toggle-button.js';

describe('<cps-toggle-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<CpsRadioGroup>(html`
      <cps-radio-group value="1">
        <cps-toggle-button id="radio-1" value="1"></cps-toggle-button>
        <cps-toggle-button id="radio-2" value="2" disabled></cps-toggle-button>
      </cps-radio-group>
    `);
    const radio1 = radioGroup.querySelector<CpsToggleButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<CpsToggleButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
