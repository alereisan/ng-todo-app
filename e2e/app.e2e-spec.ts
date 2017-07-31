import { NgTodoAppPage } from './app.po';

describe('ng-todo-app App', () => {
  let page: NgTodoAppPage;

  beforeEach(() => {
    page = new NgTodoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
