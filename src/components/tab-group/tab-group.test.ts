import { aTimeout, elementUpdated, expect, fixture, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { html } from 'lit';
import { isElementVisibleFromOverflow } from '../../internal/test/element-visible-overflow.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { sendKeys } from '@web/test-runner-commands';
import { waitForScrollingToEnd } from '../../internal/test/wait-for-scrolling.js';
import type { HTMLTemplateResult } from 'lit';
import type CpsTabGroup from '../tab-group.js';
import type CpsTabItem from '../tab-item.js';
import type CpsTabPanel from '../tab-panel.js';
import type CpsTabShowEvent from '../../events/cps-tab-show.js';

interface ClientRectangles {
  body?: DOMRect;
  navigation?: DOMRect;
}

const waitForScrollButtonsToBeRendered = async (tabGroup: CpsTabGroup): Promise<void> => {
  await waitUntil(() => {
    const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
    return scrollButtons?.length === 2;
  });
};

const getClientRectangles = (tabGroup: CpsTabGroup): ClientRectangles => {
  const shadowRoot = tabGroup.shadowRoot;
  if (shadowRoot) {
    const nav = shadowRoot.querySelector<HTMLElement>('[part=nav]');
    const body = shadowRoot.querySelector<HTMLElement>('[part=body]');
    return {
      body: body?.getBoundingClientRect(),
      navigation: nav?.getBoundingClientRect()
    };
  }
  return {};
};

const expectHeaderToBeVisible = (container: HTMLElement, dataTestId: string): void => {
  const generalHeader = queryByTestId<CpsTabItem>(container, dataTestId);
  expect(generalHeader).not.to.be.null;
  expect(generalHeader).to.be.visible;
};

const expectOnlyOneTabPanelToBeSelected = async (container: HTMLElement, dataTestIdOfSelectedTab: string) => {
  await waitUntil(() => {
    const tabPanels = Array.from(container.getElementsByTagName('cps-tab-panel'));
    const activeTabPanels = tabPanels.filter((element: CpsTabPanel) => element.hasAttribute('selected'));
    return activeTabPanels.length === 1;
  });
  const tabPanels = Array.from(container.getElementsByTagName('cps-tab-panel'));
  const activeTabPanels = tabPanels.filter((element: CpsTabPanel) => element.hasAttribute('selected'));
  expect(activeTabPanels).to.have.lengthOf(1);
  expect(activeTabPanels[0]).to.have.attribute('data-testid', dataTestIdOfSelectedTab);
};

const expectPromiseToHaveName = async (showEventPromise: Promise<CpsTabShowEvent>, expectedName: string) => {
  const showEvent = await showEventPromise;
  expect(showEvent.detail.name).to.equal(expectedName);
};

const waitForHeaderToBeSelected = async (container: HTMLElement, headerTestId: string): Promise<CpsTabItem> => {
  const generalHeader = queryByTestId<CpsTabItem>(container, headerTestId);
  await waitUntil(() => {
    return generalHeader?.hasAttribute('selected');
  });
  if (generalHeader) {
    return generalHeader;
  } else {
    throw new Error(`did not find error with testid=${headerTestId}`);
  }
};

describe('<cps-tab-group>', () => {
  it('renders', async () => {
    const tabGroup = await fixture<CpsTabGroup>(html`
      <cps-tab-group>
        <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
        <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
      </cps-tab-group>
    `);

    expect(tabGroup).to.be.visible;
  });

  it('is accessible', async () => {
    const tabGroup = await fixture<CpsTabGroup>(html`
      <cps-tab-group>
        <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
        <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
      </cps-tab-group>
    `);

    await expect(tabGroup).to.be.accessible();
  });

  it('displays all tabs', async () => {
    const tabGroup = await fixture<CpsTabGroup>(html`
      <cps-tab-group>
        <cps-tab-item slot="nav" panel="general" data-testid="general-tab-header">General</cps-tab-item>
        <cps-tab-item slot="nav" panel="disabled" disabled data-testid="disabled-tab-header">Disabled</cps-tab-item>
        <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
        <cps-tab-panel name="disabled">This is a disabled tab panel.</cps-tab-panel>
      </cps-tab-group>
    `);

    expectHeaderToBeVisible(tabGroup, 'general-tab-header');
    expectHeaderToBeVisible(tabGroup, 'disabled-tab-header');
  });

  it('shows the first tab to be selected by default', async () => {
    const tabGroup = await fixture<CpsTabGroup>(html`
      <cps-tab-group>
        <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
        <cps-tab-item slot="nav" panel="custom">Custom</cps-tab-item>
        <cps-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</cps-tab-panel>
        <cps-tab-panel name="custom">This is the custom tab panel.</cps-tab-panel>
      </cps-tab-group>
    `);

    await expectOnlyOneTabPanelToBeSelected(tabGroup, 'general-tab-content');
  });

  describe('proper positioning', () => {
    it('shows the header above the tabs by default', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.top).to.be.greaterThanOrEqual(clientRectangles.navigation?.bottom || -Infinity);
    });

    it('shows the header below the tabs by setting placement to bottom', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);
      tabGroup.placement = 'bottom';

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.bottom).to.be.lessThanOrEqual(clientRectangles.navigation?.top || +Infinity);
    });

    it('shows the header left of the tabs by setting placement to start', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);
      tabGroup.placement = 'start';

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.left).to.be.greaterThanOrEqual(clientRectangles.navigation?.right || -Infinity);
    });

    it('shows the header right of the tabs by setting placement to end', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general">General</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);
      tabGroup.placement = 'end';

      await aTimeout(0);

      const clientRectangles = getClientRectangles(tabGroup);
      expect(clientRectangles.body?.right).to.be.lessThanOrEqual(clientRectangles.navigation?.left || -Infinity);
    });
  });

  describe('scrolling behavior', () => {
    const generateTabs = (n: number): HTMLTemplateResult[] => {
      const result: HTMLTemplateResult[] = [];
      for (let i = 0; i < n; i++) {
        result.push(html`<cps-tab-item slot="nav" panel="tab-${i}">Tab ${i}</cps-tab-item>
          <cps-tab-panel name="tab-${i}">Content of tab ${i}0</cps-tab-panel> `);
      }
      return result;
    };

    before(() => {
      // disabling failing on resize observer ... unfortunately on webkit this is not really specific
      // https://github.com/WICG/resize-observer/issues/38#issuecomment-422126006
      // https://stackoverflow.com/a/64197640
      const errorHandler = window.onerror;
      window.onerror = (
        event: string | Event,
        source?: string | undefined,
        lineno?: number | undefined,
        colno?: number | undefined,
        error?: Error | undefined
      ) => {
        if ((event as string).includes('ResizeObserver') || event === 'Script error.') {
          return true;
        } else if (errorHandler) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return errorHandler(event, source, lineno, colno, error);
        } else {
          return true;
        }
      };
    });

    it('shows scroll buttons on too many tabs', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`<cps-tab-group> ${generateTabs(30)} </cps-tab-group>`);

      await waitForScrollButtonsToBeRendered(tabGroup);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
      expect(scrollButtons, 'Both scroll buttons should be shown').to.have.length(2);

      tabGroup.disconnectedCallback();
    });

    it('does not show scroll buttons on too many tabs if deactivated', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`<cps-tab-group> ${generateTabs(30)} </cps-tab-group>`);
      tabGroup.noScrollControls = true;

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    it('does not show scroll buttons if all tabs fit on the screen', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`<cps-tab-group> ${generateTabs(2)} </cps-tab-group>`);

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    it('does not show scroll buttons if placement is start', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`<cps-tab-group> ${generateTabs(50)} </cps-tab-group>`);
      tabGroup.placement = 'start';

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    it('does not show scroll buttons if placement is end', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`<cps-tab-group> ${generateTabs(50)} </cps-tab-group>`);
      tabGroup.placement = 'end';

      await aTimeout(0);

      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
      expect(scrollButtons).to.have.length(0);
    });

    it('does scroll on scroll button click', async () => {
      const numberOfElements = 15;
      const tabGroup = await fixture<CpsTabGroup>(
        html`<cps-tab-group> ${generateTabs(numberOfElements)} </cps-tab-group>`
      );

      await waitForScrollButtonsToBeRendered(tabGroup);
      const scrollButtons = tabGroup.shadowRoot?.querySelectorAll('cps-icon-button');
      expect(scrollButtons).to.have.length(2);

      const firstTab = tabGroup.querySelector('[panel="tab-0"]');
      expect(firstTab).not.to.be.null;
      const lastTab = tabGroup.querySelector(`[panel="tab-${numberOfElements - 1}"]`);
      expect(lastTab).not.to.be.null;
      expect(isElementVisibleFromOverflow(tabGroup, firstTab)).to.be.true;
      expect(isElementVisibleFromOverflow(tabGroup, lastTab)).to.be.false;

      const scrollToRightButton = tabGroup.shadowRoot?.querySelector('cps-icon-button[part*="scroll-button--end"]');
      expect(scrollToRightButton).not.to.be.null;
      await clickOnElement(scrollToRightButton);

      await elementUpdated(tabGroup);
      await waitForScrollingToEnd(firstTab);
      await waitForScrollingToEnd(lastTab);

      expect(isElementVisibleFromOverflow(tabGroup, firstTab)).to.be.false;
      expect(isElementVisibleFromOverflow(tabGroup, lastTab)).to.be.true;
    });
  });

  describe('tab selection', () => {
    const expectCustomTabToBeSelectedAfter = async (
      tabGroup: CpsTabGroup,
      action: () => Promise<void>
    ): Promise<void> => {
      const generalHeader = await waitForHeaderToBeSelected(tabGroup, 'general-header');
      generalHeader.focus();

      const customHeader = queryByTestId<CpsTabItem>(tabGroup, 'custom-header');
      expect(customHeader).not.to.have.attribute('selected');

      const showEventPromise = oneEvent(tabGroup, 'cps-tab-show') as Promise<CpsTabShowEvent>;
      await action();

      expect(customHeader).to.have.attribute('selected');
      await expectPromiseToHaveName(showEventPromise, 'custom');
      return expectOnlyOneTabPanelToBeSelected(tabGroup, 'custom-tab-content');
    };

    const expectGeneralTabToBeStillSelectedAfter = async (
      tabGroup: CpsTabGroup,
      action: () => Promise<void>
    ): Promise<void> => {
      const generalHeader = await waitForHeaderToBeSelected(tabGroup, 'general-header');
      generalHeader.focus();

      let showEventFired = false;
      let hideEventFired = false;
      oneEvent(tabGroup, 'cps-tab-show').then(() => (showEventFired = true));
      oneEvent(tabGroup, 'cps-tab-hide').then(() => (hideEventFired = true));
      await action();

      expect(generalHeader).to.have.attribute('selected');
      expect(showEventFired).to.be.false;
      expect(hideEventFired).to.be.false;
      return expectOnlyOneTabPanelToBeSelected(tabGroup, 'general-tab-content');
    };

    it('selects a tab by clicking on it', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="custom" data-testid="custom-header">Custom</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      const customHeader = queryByTestId<CpsTabItem>(tabGroup, 'custom-header');
      return expectCustomTabToBeSelectedAfter(tabGroup, () => clickOnElement(customHeader));
    });

    it('does not change if the selected tab is reselected', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="custom">Custom</cps-tab-item>
          <cps-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="custom">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      const generalHeader = queryByTestId(tabGroup, 'general-header');
      return expectGeneralTabToBeStillSelectedAfter(tabGroup, () => clickOnElement(generalHeader));
    });

    it('does not change if a disabled tab is clicked', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="disabled" data-testid="disabled-header" disabled>disabled</cps-tab-item>
          <cps-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="disabled">This is the disabled tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      const disabledHeader = queryByTestId(tabGroup, 'disabled-header');
      return expectGeneralTabToBeStillSelectedAfter(tabGroup, () => clickOnElement(disabledHeader));
    });

    it('selects a tab by using the arrow keys', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="custom" data-testid="custom-header">Custom</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      return expectCustomTabToBeSelectedAfter(tabGroup, () => sendKeys({ press: 'ArrowRight' }));
    });

    it('selects a tab by using the arrow keys and enter if activation is set to manual', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="custom" data-testid="custom-header">Custom</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);
      tabGroup.activation = 'manual';

      const generalHeader = await waitForHeaderToBeSelected(tabGroup, 'general-header');
      generalHeader.focus();

      const customHeader = queryByTestId<CpsTabItem>(tabGroup, 'custom-header');
      expect(customHeader).not.to.have.attribute('selected');

      const showEventPromise = oneEvent(tabGroup, 'cps-tab-show') as Promise<CpsTabShowEvent>;
      await sendKeys({ press: 'ArrowRight' });
      await aTimeout(0);
      expect(generalHeader).to.have.attribute('selected');

      await sendKeys({ press: 'Enter' });

      expect(customHeader).to.have.attribute('selected');
      await expectPromiseToHaveName(showEventPromise, 'custom');
      return expectOnlyOneTabPanelToBeSelected(tabGroup, 'custom-tab-content');
    });

    it('does not allow selection of disabled tabs with arrow keys', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="disabled" disabled>Disabled</cps-tab-item>
          <cps-tab-panel name="general" data-testid="general-tab-content">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="disabled">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      return expectGeneralTabToBeStillSelectedAfter(tabGroup, () => sendKeys({ press: 'ArrowRight' }));
    });

    it('selects a tab by using the show function', async () => {
      const tabGroup = await fixture<CpsTabGroup>(html`
        <cps-tab-group>
          <cps-tab-item slot="nav" panel="general" data-testid="general-header">General</cps-tab-item>
          <cps-tab-item slot="nav" panel="custom" data-testid="custom-header">Custom</cps-tab-item>
          <cps-tab-panel name="general">This is the general tab panel.</cps-tab-panel>
          <cps-tab-panel name="custom" data-testid="custom-tab-content">This is the custom tab panel.</cps-tab-panel>
        </cps-tab-group>
      `);

      return expectCustomTabToBeSelectedAfter(tabGroup, () => {
        tabGroup.show('custom');
        return aTimeout(0);
      });
    });
  });
});
