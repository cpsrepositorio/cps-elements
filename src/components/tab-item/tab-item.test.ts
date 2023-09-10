import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type CpsIconButton from '../icon-button.js';
import type CpsTabGroup from '../tab-group.js';
import type CpsTabItem from '../tab-item.js';

describe('<cps-tab-item>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<CpsTabItem>(html`
      <cps-tab-group>
        <cps-tab-item slot="nav">Test</cps-tab-item>
      </cps-tab-group>
    `);
    await expect(el).to.be.accessible();
  });

  it('should render default tab', async () => {
    const el = await fixture<CpsTabItem>(html` <cps-tab-item>Test</cps-tab-item> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('role')).to.equal('tab');
    expect(el.getAttribute('aria-disabled')).to.equal('false');
    expect(el.getAttribute('aria-selected')).to.equal('false');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' tab-item tab-item--has-label ');
    expect(el.selected).to.equal(false);
    expect(el.closable).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should disable tab by attribute', async () => {
    const el = await fixture<CpsTabItem>(html` <cps-tab-item disabled>Test</cps-tab-item> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.disabled).to.equal(true);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab-item tab-item--disabled tab-item--has-label ');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  it('should set selected tab by attribute', async () => {
    const el = await fixture<CpsTabItem>(html` <cps-tab-item selected>Test</cps-tab-item> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.selected).to.equal(true);
    expect(el.getAttribute('aria-selected')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab-item tab-item--selected tab-item--has-label ');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  it('should set closable by attribute', async () => {
    const el = await fixture<CpsTabItem>(html` <cps-tab-item closable>Test</cps-tab-item> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const closeButton = el.shadowRoot!.querySelector('[part~="close-button"]');

    expect(el.closable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tab-item tab-item--closable tab-item--has-label ');
    expect(closeButton).not.to.be.null;
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<CpsTabItem>(html` <cps-tab-item>Test</cps-tab-item> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<CpsTabItem>(html` <cps-tab-item>Test</cps-tab-item> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('closable', () => {
    it('should emit close event when the close button is clicked', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" closable>General</cps-tab-item>
          <cps-tab-item slot="nav" panel="custom" closable>Custom</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="custom">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);
      const closeButton = tabGroup
        .querySelectorAll('cps-tab-item')[0]!
        .shadowRoot!.querySelector<CpsIconButton>('[part~="close-button"]')!;

      const handleClose = sinon.spy();
      const handleTabShow = sinon.spy();

      tabGroup.addEventListener('cps-close', handleClose, { once: true });
      // The cps-tab-show event shouldn't be emitted when clicking the close button
      tabGroup.addEventListener('cps-tab-show', handleTabShow);

      closeButton.click();
      await closeButton?.updateComplete;

      expect(handleClose.called).to.equal(true);
      expect(handleTabShow.called).to.equal(false);
    });
  });
});
