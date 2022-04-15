import { GetAllUserNotificationsQuery } from './api-notifications-service-queries.query';

describe('GetAllUserNotificationsQuery', () => {
  it('should be defined', () => {
    expect(new GetAllUserNotificationsQuery()).toBeDefined();
  });
});
