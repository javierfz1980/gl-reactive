import { GlChallengePage } from './app.po';

describe('gl-challenge App', () => {
  let page: GlChallengePage;

  beforeEach(() => {
    page = new GlChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to gl!!');
  });
});
