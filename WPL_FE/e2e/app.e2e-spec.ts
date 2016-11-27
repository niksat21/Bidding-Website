import { WPLFEPage } from './app.po';

describe('wpl-fe App', function() {
  let page: WPLFEPage;

  beforeEach(() => {
    page = new WPLFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
