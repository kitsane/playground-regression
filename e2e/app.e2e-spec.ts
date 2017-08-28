import { PlaygroundRegressionPage } from './app.po';

describe('playground-regression App', () => {
  let page: PlaygroundRegressionPage;

  beforeEach(() => {
    page = new PlaygroundRegressionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
