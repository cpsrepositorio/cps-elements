import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import sinon from 'sinon';
import type CpsButton from '../button.js';

const variants = ['default', 'accent', 'transparent'];

describe('<cps-button>', () => {
  describe('accessibility tests', () => {
    variants.forEach(variant => {
      it(`should be accessible when variant is "${variant}"`, async () => {
        const el = await fixture<CpsButton>(html` <cps-button variant="${variant}"> Button Label </cps-button> `);
        await expect(el).to.be.accessible();
      });
    });
  });

  describe('when provided no parameters', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<CpsButton>(html` <cps-button>Button Label</cps-button> `);
      await expect(el).to.be.accessible();
    });

    it('default values are set correctly', async () => {
      const el = await fixture<CpsButton>(html` <cps-button>Button Label</cps-button> `);

      expect(el.title).to.equal('');
      expect(el.variant).to.equal('default');
      expect(el.size).to.equal('medium');
      expect(el.disabled).to.equal(false);
      expect(el.caret).to.equal(false);
      expect(el.waiting).to.equal(false);
      expect(el.rounded).to.equal('default');
    });

    it('should render as a <button>', async () => {
      const el = await fixture<CpsButton>(html` <cps-button>Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('button')).to.exist;
      expect(el.shadowRoot!.querySelector('a')).not.to.exist;
    });

    it('should not have a spinner present', async () => {
      const el = await fixture<CpsButton>(html` <cps-button>Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('cps-spinner')).not.to.exist;
    });

    it('should not have a caret present', async () => {
      const el = await fixture<CpsButton>(html` <cps-button>Button Label</cps-button> `);
      expect(el.shadowRoot?.querySelector('[part~="caret"]')).not.to.exist;
    });
  });

  describe('when disabled', () => {
    it('passes accessibility test', async () => {
      const el = await fixture<CpsButton>(html` <cps-button disabled>Button Label</cps-button> `);
      await expect(el).to.be.accessible();
    });

    it('should disable the native <button> when rendering a <button>', async () => {
      const el = await fixture<CpsButton>(html` <cps-button disabled>Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('button[disabled]')).to.exist;
    });

    it('should not disable the native <a> when rendering an <a>', async () => {
      const el = await fixture<CpsButton>(html` <cps-button href="some/path" disabled>Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('a[disabled]')).not.to.exist;
    });

    it('should not bubble up clicks', async () => {
      const button = await fixture<CpsButton>(html` <cps-button disabled>Button Label</cps-button> `);
      const handleClick = sinon.spy();
      button.addEventListener('click', handleClick);
      button.click();

      expect(handleClick).not.to.have.been.called;

      button.shadowRoot!.querySelector('button')!.click();
      expect(handleClick).not.to.have.been.called;

      const buttonLink = await fixture<CpsButton>(
        html` <cps-button href="some/path" disabled>Button Label</cps-button> `
      );
      buttonLink.addEventListener('click', handleClick);
      buttonLink.click();

      expect(handleClick).not.to.have.been.called;

      buttonLink.shadowRoot!.querySelector('a')!.click();
      expect(handleClick).not.to.have.been.called;
    });
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<CpsButton>(html` <cps-button title="Test"></cps-button> `);
    const button = el.shadowRoot!.querySelector<HTMLButtonElement>('[part~="base"]')!;

    expect(button.title).to.equal('Test');
  });

  describe('when waiting', () => {
    it('should have a spinner present', async () => {
      const el = await fixture<CpsButton>(html` <cps-button waiting>Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('cps-spinner')).to.exist;
    });
  });

  describe('when caret', () => {
    it('should have a caret present', async () => {
      const el = await fixture<CpsButton>(html` <cps-button caret>Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('[part~="caret"]')).to.exist;
    });
  });

  describe('when href is present', () => {
    it('should render as an <a>', async () => {
      const el = await fixture<CpsButton>(html` <cps-button href="some/path">Button Label</cps-button> `);
      expect(el.shadowRoot!.querySelector('a')).to.exist;
      expect(el.shadowRoot!.querySelector('button')).not.to.exist;
    });

    it('should render a link with rel="noreferrer noopener" when target is set and rel is not', async () => {
      const el = await fixture<CpsButton>(
        html` <cps-button href="https://example.com/" target="_blank">Link</cps-button> `
      );
      const link = el.shadowRoot!.querySelector('a')!;
      expect(link?.getAttribute('rel')).to.equal('noreferrer noopener');
    });

    it('should render a link with rel="" when a target is provided and rel is empty', async () => {
      const el = await fixture<CpsButton>(
        html` <cps-button href="https://example.com/" target="_blank" rel="">Link</cps-button> `
      );
      const link = el.shadowRoot!.querySelector('a')!;
      expect(link?.getAttribute('rel')).to.equal('');
    });

    it(`should render a link with a custom rel when a custom rel is provided`, async () => {
      const el = await fixture<CpsButton>(
        html` <cps-button href="https://example.com/" target="_blank" rel="1">Link</cps-button> `
      );
      const link = el.shadowRoot!.querySelector('a')!;
      expect(link?.getAttribute('rel')).to.equal('1');
    });
  });

  describe('when submitting a form', () => {
    it('should submit when the button is inside the form', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form action="" method="post">
          <cps-button type="submit">Submit</cps-button>
        </form>
      `);
      const button = form.querySelector<CpsButton>('cps-button')!;
      const handleSubmit = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', handleSubmit);
      button.click();

      expect(handleSubmit).to.have.been.calledOnce;
    });

    it('should submit when the button is outside the form and has a form attribute', async () => {
      const el = await fixture(html`
        <div>
          <form id="a" action="" method="post"></form>
          <cps-button type="submit" form="a">Submit</cps-button>
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>('form')!;
      const button = el.querySelector<CpsButton>('cps-button')!;
      const handleSubmit = sinon.spy((event: SubmitEvent) => event.preventDefault());

      form.addEventListener('submit', handleSubmit);
      button.click();

      expect(handleSubmit).to.have.been.calledOnce;
    });

    it('should override form attributes when formaction, formmethod, formnovalidate, and formtarget are used inside a form', async () => {
      const form = await fixture(html`
        <form id="a" action="foo" method="post" target="_self">
          <cps-button type="submit" form="a" formaction="bar" formmethod="get" formtarget="_blank" formnovalidate>
            Submit
          </cps-button>
        </form>
      `);
      const button = form.querySelector<CpsButton>('cps-button')!;
      const handleSubmit = sinon.spy((event: SubmitEvent) => {
        submitter = event.submitter as HTMLButtonElement;
        event.preventDefault();
      });
      let submitter!: HTMLButtonElement;

      form.addEventListener('submit', handleSubmit);
      button.click();

      expect(handleSubmit).to.have.been.calledOnce;
      expect(submitter.formAction.endsWith('/bar')).to.be.true;
      expect(submitter.formMethod).to.equal('get');
      expect(submitter.formTarget).to.equal('_blank');
      expect(submitter.formNoValidate).to.be.true;
    });

    it('should override form attributes when formaction, formmethod, formnovalidate, and formtarget are used outside a form', async () => {
      const el = await fixture(html`
        <div>
          <form id="a" action="foo" method="post" target="_self"></form>
          <cps-button type="submit" form="a" formaction="bar" formmethod="get" formtarget="_blank" formnovalidate>
            Submit
          </cps-button>
        </div>
      `);
      const form = el.querySelector<HTMLFormElement>('form')!;
      const button = el.querySelector<CpsButton>('cps-button')!;
      const handleSubmit = sinon.spy((event: SubmitEvent) => {
        submitter = event.submitter as HTMLButtonElement;
        event.preventDefault();
      });
      let submitter!: HTMLButtonElement;

      form.addEventListener('submit', handleSubmit);
      button.click();

      expect(handleSubmit).to.have.been.calledOnce;
      expect(submitter.formAction.endsWith('/bar')).to.be.true;
      expect(submitter.formMethod).to.equal('get');
      expect(submitter.formTarget).to.equal('_blank');
      expect(submitter.formNoValidate).to.be.true;
    });
  });

  describe('when using methods', () => {
    it('should emit cps-focus and cps-blur when the button is focused and blurred', async () => {
      const el = await fixture<CpsButton>(html` <cps-button>Button</cps-button> `);
      const focusHandler = sinon.spy();
      const blurHandler = sinon.spy();

      el.addEventListener('cps-focus', focusHandler);
      el.addEventListener('cps-blur', blurHandler);

      el.focus();
      await waitUntil(() => focusHandler.calledOnce);

      el.blur();
      await waitUntil(() => blurHandler.calledOnce);

      expect(focusHandler).to.have.been.calledOnce;
      expect(blurHandler).to.have.been.calledOnce;
    });

    it('should emit a click event when calling click()', async () => {
      const el = await fixture<CpsButton>(html` <cps-button></cps-button> `);
      const clickHandler = sinon.spy();

      el.addEventListener('click', clickHandler);
      el.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
    });
  });

  runFormControlBaseTests({
    tagName: 'cps-button',
    variantName: 'type="button"',

    init: (control: CpsButton) => {
      control.type = 'button';
    }
  });

  runFormControlBaseTests({
    tagName: 'cps-button',
    variantName: 'type="submit"',

    init: (control: CpsButton) => {
      control.type = 'submit';
    }
  });

  runFormControlBaseTests({
    tagName: 'cps-button',
    variantName: 'href="xyz"',

    init: (control: CpsButton) => {
      control.href = 'some-url';
    }
  });
});
