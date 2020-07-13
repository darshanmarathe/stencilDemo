import { newE2EPage } from '@stencil/core/testing';

describe('manotr-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<manotr-timeline></manotr-timeline>');
    const element = await page.find('manotr-timeline');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
