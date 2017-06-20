import { AlumniPortalPage } from './app.po';

describe('alumni-portal App', () => {
  let page: AlumniPortalPage;

  beforeEach(() => {
    page = new AlumniPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
