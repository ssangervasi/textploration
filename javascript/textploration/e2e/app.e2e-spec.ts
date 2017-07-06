import { TextplorationPage } from './app.po';

describe('textploration App', () => {
  let page: TextplorationPage;

  beforeEach(() => {
    page = new TextplorationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
