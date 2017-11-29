import { MiniGamePage } from './app.po';

describe('mini-game App', () => {
  let page: MiniGamePage;

  beforeEach(() => {
    page = new MiniGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
