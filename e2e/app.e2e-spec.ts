import { SteppersPage } from './app.po';

describe('steppers App', () => {
  let page: SteppersPage;

  beforeEach(() => {
    page = new SteppersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
