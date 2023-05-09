import { expect, fixture, html } from '@open-wc/testing';
import type CpsSkeleton from '../skeleton';

describe('<cps-skeleton>', () => {
  it('should render default skeleton', async () => {
    const el = await fixture<CpsSkeleton>(html` <cps-skeleton></cps-skeleton> `);

    await expect(el).to.be.accessible();

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const indicator = el.shadowRoot!.querySelector<HTMLElement>('[part~="indicator"]')!;

    expect(base.getAttribute('class')?.trim()).to.equal('skeleton skeleton--rounded skeleton--sheen');
    expect(indicator.getAttribute('class')?.trim()).to.equal('skeleton__indicator');
  });

  it('should set pulse effect by attribute', async () => {
    const el = await fixture<CpsSkeleton>(html` <cps-skeleton effect="pulse"></cps-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')?.trim()).to.equal('skeleton skeleton--rounded skeleton--pulse');
  });

  it('should set none effect by attribute', async () => {
    const el = await fixture<CpsSkeleton>(html` <cps-skeleton effect="none"></cps-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')?.trim()).to.equal('skeleton skeleton--rounded');
  });

  it('should set corner rounded by attribute', async () => {
    const el = await fixture<CpsSkeleton>(html` <cps-skeleton rounded="corner"></cps-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')?.trim()).to.equal('skeleton skeleton--rounded-corner skeleton--sheen');
  });

  it('should set full rounded by attribute', async () => {
    const el = await fixture<CpsSkeleton>(html` <cps-skeleton rounded="full"></cps-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')?.trim()).to.equal('skeleton skeleton--rounded-full skeleton--sheen');
  });

  it('should set none rounded by attribute', async () => {
    const el = await fixture<CpsSkeleton>(html` <cps-skeleton rounded="none"></cps-skeleton> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('class')?.trim()).to.equal('skeleton skeleton--sheen');
  });
});
