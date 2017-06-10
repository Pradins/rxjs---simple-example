import { RxjsStorePage } from './app.po';

describe('rxjs-store App', () => {
  let page: RxjsStorePage;

  beforeEach(() => {
    page = new RxjsStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
