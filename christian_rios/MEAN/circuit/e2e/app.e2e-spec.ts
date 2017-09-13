import { CircuitPage } from './app.po';

describe('circuit App', () => {
  let page: CircuitPage;

  beforeEach(() => {
    page = new CircuitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
