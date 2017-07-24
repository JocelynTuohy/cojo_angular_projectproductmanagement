import { ProjectproductmanagementPage } from './app.po';

describe('projectproductmanagement App', () => {
  let page: ProjectproductmanagementPage;

  beforeEach(() => {
    page = new ProjectproductmanagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
