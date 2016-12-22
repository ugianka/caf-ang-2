import { CafAng2Page } from './app.po';

describe('caf-ang-2 App', function() {
  let page: CafAng2Page;

  beforeEach(() => {
    page = new CafAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
