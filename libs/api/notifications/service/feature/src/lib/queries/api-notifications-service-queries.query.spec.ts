import { GetAllUserNotificationsQuery,
  GetNotificationByIdQuery,
  GetNotificationsByTypeQuery,
  GetNotificationsReceivedQuery,
  GetNotificationsSentQuery } from './api-notifications-service-queries.query';


  //Perform Standard definition testing
describe('GetAllUserNotificationsQuery', () => {
  it('should be defined', () => {
    expect(new GetAllUserNotificationsQuery()).toBeDefined();
  });

  it('should be defined', () => {
    expect(new GetNotificationByIdQuery("userID")).toBeDefined();
  });

  it('should be defined', () => {
    expect(new GetNotificationsReceivedQuery("userID")).toBeDefined();
  });

  it('should be defined', () => {
    expect(new GetNotificationsSentQuery("userID")).toBeDefined();
  });

  it('should be defined', () => {
    expect(new GetNotificationsByTypeQuery("userID","notificationType")).toBeDefined();
  });

  //Testing validity
  it('should be true', () => {
    expect(new GetAllUserNotificationsQuery()).toBeTruthy();
  });

  it('should be true', () => {
    expect(new GetNotificationByIdQuery("userID")).toBeTruthy();
  });

  it('should be true', () => {
    expect(new GetNotificationsReceivedQuery("userID")).toBeTruthy();
  });

  it('should be true', () => {
    expect(new GetNotificationsSentQuery("userID")).toBeTruthy();
  });

  it('should be true', () => {
    expect(new GetNotificationsByTypeQuery("userID","notificationType")).toBeTruthy();
  });

  //Return testing
  it('should be true', () => {
    function getFunction(fn){
      return fn(new GetAllUserNotificationsQuery());
    }
    const mock = jest.fn();
    getFunction(mock);
    expect(mock).toBeCalledWith(expect.any(GetAllUserNotificationsQuery));
  });

  it('should be true', () => {
    function getFunction(fn){
      return fn(new GetNotificationByIdQuery("userID"));
    }
    const mock = jest.fn();
    getFunction(mock);
    expect(mock).toBeCalledWith(expect.any(GetNotificationByIdQuery));
  });

  it('should be true', () => {
    function getFunction(fn){
      return fn(new GetNotificationsReceivedQuery("userID"));
    }
    const mock = jest.fn();
    getFunction(mock);
    expect(mock).toBeCalledWith(expect.any(GetNotificationsReceivedQuery));
  });

  it('should be true', () => {
    function getFunction(fn){
      return fn(new GetNotificationsSentQuery("userID"));
    }
    const mock = jest.fn();
    getFunction(mock);
    expect(mock).toBeCalledWith(expect.any(GetNotificationsSentQuery));
  });

  it('should be true', () => {
    function getFunction(fn){
      return fn(new GetNotificationsByTypeQuery("userID","notificationType"));
    }
    const mock = jest.fn();
    getFunction(mock);
    expect(mock).toBeCalledWith(expect.any(GetNotificationsByTypeQuery));
  });
});
