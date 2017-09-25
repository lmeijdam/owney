import { LmOwneyPage } from './app.po';

describe('lm-owney App', function() {
  let page: LmOwneyPage;

  beforeEach(() => {
    page = new LmOwneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
