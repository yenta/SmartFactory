import { SmartFactoryPage } from './app.po';

describe('smart-factory App', function() {
  let page: SmartFactoryPage;

  beforeEach(() => {
    page = new SmartFactoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
