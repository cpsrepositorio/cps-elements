import { clickOnElement } from '../../internal/test.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type CpsMenuItem from '../menu-item.js';

describe('<cps-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<CpsMenuItem>(html`
      <cps-menu>
        <cps-menu-item>Item 1</cps-menu-item>
        <cps-menu-item>Item 2</cps-menu-item>
        <cps-menu-item>Item 3</cps-menu-item>
        <cps-separator></cps-separator>
        <cps-menu-item type="checkbox" checked>Checked</cps-menu-item>
        <cps-menu-item type="checkbox">Unchecked</cps-menu-item>
      </cps-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<CpsMenuItem>(html` <cps-menu-item>Test</cps-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<CpsMenuItem>(html` <cps-menu-item disabled>Test</cps-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should not emit the click event when disabled', async () => {
    const el = await fixture<CpsMenuItem>(html` <cps-menu-item disabled>Test</cps-menu-item> `);
    const clickHandler = sinon.spy();
    el.addEventListener('click', clickHandler);
    await clickOnElement(el);
    await el.updateComplete;

    expect(clickHandler).to.not.have.been.called;
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<CpsMenuItem>(html` <cps-menu-item>Test</cps-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<CpsMenuItem>(html` <cps-menu-item>Text</cps-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<CpsMenuItem>(html`
      <cps-menu>
        <cps-menu-item inert>Item 1</cps-menu-item>
        <cps-menu-item>Item 2</cps-menu-item>
        <cps-menu-item>Item 3</cps-menu-item>
      </cps-menu>
    `);
    const item1 = menu.querySelector('cps-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
