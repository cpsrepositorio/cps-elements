import { aTimeout, expect, fixture, html, oneEvent } from '@open-wc/testing';
import { clickOnElement, moveMouseOnElement } from '../../internal/test.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import { resetMouse } from '@web/test-runner-commands';
import sinon from 'sinon';
import type CpsIconButton from '../icon-button.js';
import type CpsNotification from '../notification.js';

const getNotificationContainer = (notification: CpsNotification): HTMLElement => {
  return notification.shadowRoot!.querySelector<HTMLElement>('[part="base"]')!;
};

const expectNotificationToBeVisible = (notification: CpsNotification): void => {
  const notificationContainer = getNotificationContainer(notification);
  const style = window.getComputedStyle(notificationContainer);
  expect(style.display).not.to.equal('none');
  expect(style.visibility).not.to.equal('hidden');
  expect(style.visibility).not.to.equal('collapse');
};

const expectNotificationToBeInvisible = (notification: CpsNotification): void => {
  const notificationContainer = getNotificationContainer(notification);
  const style = window.getComputedStyle(notificationContainer);
  expect(style.display, 'notification should be invisible').to.equal('none');
};

const expectHideAndAfterHideToBeEmittedInCorrectOrder = async (
  notification: CpsNotification,
  action: () => void | Promise<void>
) => {
  const hidePromise = oneEvent(notification, 'cps-hide');
  const afterHidePromise = oneEvent(notification, 'cps-after-hide');
  let afterHideHappened = false;
  oneEvent(notification, 'cps-after-hide').then(() => (afterHideHappened = true));

  action();

  await hidePromise;
  expect(afterHideHappened).to.be.false;

  await afterHidePromise;
  expectNotificationToBeInvisible(notification);
};

const expectShowAndAfterShowToBeEmittedInCorrectOrder = async (
  notification: CpsNotification,
  action: () => void | Promise<void>
) => {
  const showPromise = oneEvent(notification, 'cps-show');
  const afterShowPromise = oneEvent(notification, 'cps-after-show');
  let afterShowHappened = false;
  oneEvent(notification, 'cps-after-show').then(() => (afterShowHappened = true));

  action();

  await showPromise;
  expect(afterShowHappened).to.be.false;

  await afterShowPromise;
  expectNotificationToBeVisible(notification);
};

const getCloseButton = (notification: CpsNotification): CpsIconButton | null | undefined =>
  notification.shadowRoot?.querySelector<CpsIconButton>('[part="close-button"]');

describe('<cps-notification>', () => {
  let clock: sinon.SinonFakeTimers | null = null;

  afterEach(async () => {
    clock?.restore();
    await resetMouse();
  });

  it('renders', async () => {
    const notification = await fixture<CpsNotification>(
      html` <cps-notification open>I am an notification</cps-notification> `
    );

    expectNotificationToBeVisible(notification);
  });

  it('is accessible', async () => {
    const notification = await fixture<CpsNotification>(
      html` <cps-notification open>I am an notification</cps-notification> `
    );

    await expect(notification).to.be.accessible();
  });

  describe('notification visibility', () => {
    it('should be visible with the open attribute', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open>I am an notification</cps-notification> `
      );

      expectNotificationToBeVisible(notification);
    });

    it('should not be visible without the open attribute', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification>I am an notification</cps-notification> `
      );

      expectNotificationToBeInvisible(notification);
    });

    it('should emit cps-show and cps-after-show when calling show()', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification>I am an notification</cps-notification> `
      );

      expectNotificationToBeInvisible(notification);

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(notification, () => notification.show());
    });

    it('should emit cps-hide and cps-after-hide when calling hide()', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open>I am an notification</cps-notification> `
      );

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => notification.hide());
    });

    it('should emit cps-show and cps-after-show when setting open = true', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification>I am an notification</cps-notification> `
      );

      await expectShowAndAfterShowToBeEmittedInCorrectOrder(notification, () => {
        notification.open = true;
      });
    });

    it('should emit cps-hide and cps-after-hide when setting open = false', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open>I am an notification</cps-notification> `
      );

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        notification.open = false;
      });
    });
  });

  describe('close button', () => {
    it('shows a close button if the notification has the closable attribute', () => async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open closable>I am an notification</cps-notification> `
      );
      const closeButton = getCloseButton(notification);

      expect(closeButton).to.be.visible;
    });

    it('clicking the close button closes the notification', () => async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open closable>I am an notification</cps-notification> `
      );
      const closeButton = getCloseButton(notification);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clickOnElement(closeButton);
      });
    });
  });

  describe('toast', () => {
    const getToastStack = (): HTMLDivElement | null => document.querySelector<HTMLDivElement>('.cps-toast-stack');

    const closeRemainingNotifications = async (): Promise<void> => {
      const toastStack = getToastStack();
      if (toastStack?.children) {
        for (const element of toastStack.children) {
          await (element as CpsNotification).hide();
        }
      }
    };

    beforeEach(async () => {
      await closeRemainingNotifications();
    });

    it('can be rendered as a toast', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification>I am an notification</cps-notification> `
      );

      expectShowAndAfterShowToBeEmittedInCorrectOrder(notification, () => notification.toast());
      const toastStack = getToastStack();
      expect(toastStack).to.be.visible;
      expect(toastStack?.firstChild).to.be.equal(notification);
    });

    it('resolves only after being closed', async () => {
      const notification = await fixture<CpsNotification>(
        html` <cps-notification closable>I am an notification</cps-notification> `
      );

      const afterShowEvent = oneEvent(notification, 'cps-after-show');
      let toastPromiseResolved = false;
      notification.toast().then(() => (toastPromiseResolved = true));

      await afterShowEvent;
      expect(toastPromiseResolved).to.be.false;

      const closePromise = oneEvent(notification, 'cps-after-hide');
      const closeButton = getCloseButton(notification);
      clickOnElement(closeButton);

      await closePromise;
      await aTimeout(0);

      expect(toastPromiseResolved).to.be.true;
    });

    const expectToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).not.to.be.null;
    };

    const expectNoToastStack = () => {
      const toastStack = getToastStack();
      expect(toastStack).to.be.null;
    };

    const openToast = async (notification: CpsNotification): Promise<void> => {
      const openPromise = oneEvent(notification, 'cps-after-show');
      notification.toast();
      await openPromise;
    };

    const closeToast = async (notification: CpsNotification): Promise<void> => {
      const closePromise = oneEvent(notification, 'cps-after-hide');
      const closeButton = getCloseButton(notification);
      await clickOnElement(closeButton);
      await closePromise;
      await aTimeout(0);
    };

    it('deletes the toast stack after the last notification is done', async () => {
      const container = await fixture<HTMLElement>(html` <div>
        <cps-notification data-testid="notification1" closable>notification 1</cps-notification>
        <cps-notification data-testid="notification2" closable>notification 2</cps-notification>
      </div>`);

      const notification1 = queryByTestId<CpsNotification>(container, 'notification1');
      const notification2 = queryByTestId<CpsNotification>(container, 'notification2');

      await openToast(notification1!);

      expectToastStack();

      await openToast(notification2!);

      expectToastStack();

      await closeToast(notification1!);

      expectToastStack();

      await closeToast(notification2!);

      expectNoToastStack();
    });
  });

  describe('timer controlled closing', () => {
    it('closes after a predefined amount of time', async () => {
      clock = sinon.useFakeTimers();
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open duration="3000">I am an notification</cps-notification> `
      );

      expectNotificationToBeVisible(notification);

      clock.tick(2999);

      expectNotificationToBeVisible(notification);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after mouse-over', async () => {
      clock = sinon.useFakeTimers();
      const notification = await fixture<CpsNotification>(
        html` <cps-notification open duration="3000">I am an notification</cps-notification> `
      );

      expectNotificationToBeVisible(notification);

      clock.tick(1000);

      await moveMouseOnElement(notification);

      clock.tick(2999);

      expectNotificationToBeVisible(notification);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clock?.tick(1);
      });
    });

    it('resets the closing timer after opening', async () => {
      clock = sinon.useFakeTimers();
      const notification = await fixture<CpsNotification>(
        html` <cps-notification duration="3000">I am an notification</cps-notification> `
      );

      expectNotificationToBeInvisible(notification);

      clock.tick(1000);

      const afterShowPromise = oneEvent(notification, 'cps-after-show');
      notification.show();
      await afterShowPromise;

      clock.tick(2999);

      await expectHideAndAfterHideToBeEmittedInCorrectOrder(notification, () => {
        clock?.tick(1);
      });
    });
  });

  describe('notification variants', () => {
    const variants = ['neutral', 'informative', 'warning', 'critical', 'success'];

    variants.forEach(variant => {
      it(`adapts to the variant: ${variant}`, async () => {
        const notification = await fixture<CpsNotification>(
          html` <cps-notification variant="${variant}" open>I am an notification</cps-notification> `
        );

        const notificationContainer = getNotificationContainer(notification);
        expect(notificationContainer).to.have.class(`notification--${variant}`);
      });
    });
  });
});
