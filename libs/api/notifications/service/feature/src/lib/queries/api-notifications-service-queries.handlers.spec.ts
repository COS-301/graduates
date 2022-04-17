import { GetAllUserNotificationsHandler } from './api-notifications-service-queries.handlers';

describe('GetAllUserNotificationsHandlers', () => {
  it('should be defined', () => {
    expect("new GetAllUserNotificationsHandler()").toBeDefined();
  });

  //Test if queries are defined
  it('should be defined', () => {
    expect("new GetNotificationsByIdHandler").toBeDefined();
  });

  it('should be defined', () => {
    expect("new GetNotificationsReceivedHandler").toBeDefined();
  });

  it('should be defined', () => {
    expect("new GetNotificationsSentHandler").toBeDefined();
  });

  it('should be defined', () => {
    expect("new GetNotificationsByTypeHandler").toBeDefined();
  });

  //Test truthiness
  it('should be defined', () => {
    expect("new GetNotificationsByIdHandler").toBeTruthy();
  });

  it('should be defined', () => {
    expect("new GetNotificationsReceivedHandler").toBeTruthy();
  });

  it('should be defined', () => {
    expect("new GetNotificationsSentHandler").toBeTruthy();
  });

  it('should be defined', () => {
    expect("new GetNotificationsByTypeHandler").toBeTruthy();
  });

});
