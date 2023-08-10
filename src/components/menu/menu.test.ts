import { clickOnElement } from '../../internal/test.js';
import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type CpsMenu from '../menu.js';
import type CpsSelectEvent from '../../events/cps-select.js';

describe('<cps-menu>', () => {
  it('passes accessibility test', async () => {
    const menu = await fixture<CpsMenu>(html`
      <cps-menu>
        <cps-menu-item value="item-1">Item 1</cps-menu-item>
        <cps-menu-item value="item-2">Item 2</cps-menu-item>
        <cps-menu-item value="item-3">Item 3</cps-menu-item>
        <cps-menu-item value="item-4">Item 4</cps-menu-item>
      </cps-menu>
    `);
    await expect(menu).to.be.accessible();
  });

  it('emits cps-select with the correct event detail when clicking an item', async () => {
    const menu = await fixture<CpsMenu>(html`
      <cps-menu>
        <cps-menu-item value="item-1">Item 1</cps-menu-item>
        <cps-menu-item value="item-2">Item 2</cps-menu-item>
        <cps-menu-item value="item-3">Item 3</cps-menu-item>
        <cps-menu-item value="item-4">Item 4</cps-menu-item>
      </cps-menu>
    `);
    const item2 = menu.querySelectorAll('cps-menu-item')[1];
    const selectHandler = sinon.spy((event: CpsSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect event detail emitted with cps-select');
      }
    });

    menu.addEventListener('cps-select', selectHandler);
    await clickOnElement(item2);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('can be selected via keyboard', async () => {
    const menu = await fixture<CpsMenu>(html`
      <cps-menu>
        <cps-menu-item value="item-1">Item 1</cps-menu-item>
        <cps-menu-item value="item-2">Item 2</cps-menu-item>
        <cps-menu-item value="item-3">Item 3</cps-menu-item>
        <cps-menu-item value="item-4">Item 4</cps-menu-item>
      </cps-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('cps-menu-item');
    const selectHandler = sinon.spy((event: CpsSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect item selected');
      }
    });

    menu.addEventListener('cps-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('does not select disabled items when clicking', async () => {
    const menu = await fixture<CpsMenu>(html`
      <cps-menu>
        <cps-menu-item value="item-1">Item 1</cps-menu-item>
        <cps-menu-item value="item-2" disabled>Item 2</cps-menu-item>
        <cps-menu-item value="item-3">Item 3</cps-menu-item>
        <cps-menu-item value="item-4">Item 4</cps-menu-item>
      </cps-menu>
    `);
    const item2 = menu.querySelectorAll('cps-menu-item')[1];
    const selectHandler = sinon.spy();

    menu.addEventListener('cps-select', selectHandler);

    await clickOnElement(item2);

    expect(selectHandler).to.not.have.been.calledOnce;
  });

  it('does not select disabled items when tabbing', async () => {
    const menu = await fixture<CpsMenu>(html`
      <cps-menu>
        <cps-menu-item value="item-1">Item 1</cps-menu-item>
        <cps-menu-item value="item-2" disabled>Item 2</cps-menu-item>
        <cps-menu-item value="item-3">Item 3</cps-menu-item>
        <cps-menu-item value="item-4">Item 4</cps-menu-item>
      </cps-menu>
    `);
    const [item1, , item3] = menu.querySelectorAll('cps-menu-item');
    const selectHandler = sinon.spy();

    menu.addEventListener('cps-select', selectHandler);

    item1.focus();
    await sendKeys({ press: 'ArrowDown' });
    expect(document.activeElement).to.equal(item3);
    await sendKeys({ press: 'Enter' });

    expect(selectHandler).to.have.been.called;
  });
});
