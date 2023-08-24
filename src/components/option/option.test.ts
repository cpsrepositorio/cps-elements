import { aTimeout, expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type CpsOption from '../option';

describe('<cps-option>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<CpsOption>(html`
      <cps-select label="Select one">
        <cps-option value="1">Option 1</cps-option>
        <cps-option value="2">Option 2</cps-option>
        <cps-option value="3">Option 3</cps-option>
        <cps-option value="4" disabled>Disabled</cps-option>
      </cps-select>
    `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<CpsOption>(html` <cps-option>Test</cps-option> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('changes aria attributes', async () => {
    const el = await fixture<CpsOption>(html` <cps-option>Test</cps-option> `);

    el.disabled = true;
    await aTimeout(100);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('emits the slotchange event when the label changes', async () => {
    const el = await fixture<CpsOption>(html` <cps-option>Text</cps-option> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should convert non-string values to string', async () => {
    const el = await fixture<CpsOption>(html` <cps-option>Text</cps-option> `);

    // @ts-expect-error - intentional
    el.value = 10;
    await el.updateComplete;

    expect(el.value).to.equal('10');
  });
});
