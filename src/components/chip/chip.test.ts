import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type CpsChip from '../chip.js';

describe('<cps-chip>', () => {
  it('should render default chip', async () => {
    const el = await fixture<CpsChip>(html` <cps-chip>Test</cps-chip> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('size')).to.equal('medium');
    expect(base.getAttribute('class')).to.equal(' chip chip--neutral chip--medium ');
  });

  it('should set variant by attribute', async () => {
    const el = await fixture<CpsChip>(html` <cps-chip variant="critical">Test</cps-chip> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' chip chip--critical chip--medium ');
  });

  it('should set size by attribute', async () => {
    const el = await fixture<CpsChip>(html` <cps-chip size="large">Test</cps-chip> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')).to.equal(' chip chip--neutral chip--large ');
  });

  it('should set removable by attribute', async () => {
    const el = await fixture<CpsChip>(html` <cps-chip removable>Test</cps-chip> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const removeButton = el.shadowRoot!.querySelector('[part~="remove-button"]');

    expect(el.removable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' chip chip--neutral chip--medium chip--removable ');
    expect(removeButton).not.to.be.null;
  });

  describe('removable', () => {
    it('should emit remove event when remove button clicked', async () => {
      const el = await fixture<CpsChip>(html` <cps-chip removable>Test</cps-chip> `);

      const removeButton = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="remove-button"]')!;
      const spy = sinon.spy();

      el.addEventListener('cps-remove', spy, { once: true });

      removeButton.click();

      expect(spy.called).to.equal(true);
    });
  });
});
