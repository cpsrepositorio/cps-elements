import { expect, fixture, html } from '@open-wc/testing';

describe('<cps-visually-hidden>', () => {
  it('renders but not display visually hidden content', async () => {
    const el = await fixture(html`
      <cps-visually-hidden>
        <a href="#">Pular para conteúdo principal</a>
      </cps-visually-hidden>
    `);

    const { width, height, overflow, clipPath } = getComputedStyle(el);

    expect(width).to.equal('1px');
    expect(height).to.equal('1px');
    expect(overflow).to.equal('hidden');
    expect(clipPath).to.equal('inset(50%)');
  });

  it('shows visually hidden content when focused', async () => {
    const el = await fixture(html`
      <cps-visually-hidden>
        <a href="#">Pular para conteúdo principal</a>
      </cps-visually-hidden>
    `);

    const a = el.querySelector('a')!;
    a.focus();

    const { width, height, overflow, clipPath } = getComputedStyle(el);

    expect(width).not.to.equal('1px');
    expect(height).not.to.equal('1px');
    expect(overflow).not.to.equal('hidden');
    expect(clipPath).not.to.equal('inset(50%)');
  });
});
