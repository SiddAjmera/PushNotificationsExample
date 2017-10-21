import { PushNotificationExamplePage } from './app.po';

describe('push-notification-example App', () => {
  let page: PushNotificationExamplePage;

  beforeEach(() => {
    page = new PushNotificationExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
