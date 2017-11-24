import { Ex1Page } from './app.po';

describe('ex1 App', () => {
  let page: Ex1Page;

  beforeEach(() => {
    page = new Ex1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
