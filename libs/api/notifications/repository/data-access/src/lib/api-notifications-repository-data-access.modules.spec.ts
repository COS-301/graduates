import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsRepository } from './api-notifications-repository-data-access.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

describe('API Notifications Data Access Module', () => {
  let controller: NotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsRepository],
      providers: [PrismaService],
    }).compile();

    controller = module.get<NotificationsRepository>(NotificationsRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //Start of manually added tests:
  //See if each function is defined

  it('should be defined', () => {
    expect(controller.findNotificationsAll()).toBeDefined();
  })

  it('should be defined', () => {
    const id = "12312";
    expect(controller.findNotificationById(id)).toBeDefined();
  })

  it('should be defined', () => {
    const userID = "userID";
    expect(controller.findNotificationsReceived(userID)).toBeDefined;
  })

  it('should be defined', () => {
    const userTo = "userTo";
    const userFrom = "userFrom";
    const notificationType = "NotificationType";
    expect(controller.createRequestNotification(userTo, userFrom, notificationType)).toBeDefined();
  })

  it('should be defined', () => {
    const userID = "userID";
    const notificationType = "notificationType";
    expect(controller.findNotificationsByType(userID,notificationType)).toBeDefined;
  })


  it('should be defined', () => {
    const userID = "userID";
    expect(controller.findNotificationsSent(userID)).toBeDefined;
  })

  it('should be defined', () => {
    const ID = "userID";
    const seen = true;
    expect(controller.updateSeen(ID,seen)).toBeDefined;
  })

  it('should be defined', () => {
    const ID = "userID";
    const status = "Unread";
    expect(controller.updateRequestNotification(ID,status)).toBeDefined;
  })

  //See if each function is valid if given valid input
  it('should be true', () => {
    expect(controller.findNotificationsAll()).toBeTruthy();
  })

  it('should be true', () => {
    const id = "12312";
    expect(controller.findNotificationById(id)).toBeTruthy();
  })

  it('should be true', () => {
    const userID = "userID";
    expect(controller.findNotificationsReceived(userID)).toBeTruthy;
  })

  it('should be true', () => {
    const userTo = "userTo";
    const userFrom = "userFrom";
    const notificationType = "NotificationType";
    expect(controller.createRequestNotification(userTo, userFrom, notificationType)).toBeTruthy();
  })

  it('should be true', () => {
    const userID = "userID";
    const notificationType = "notificationType";
    expect(controller.findNotificationsByType(userID,notificationType)).toBeTruthy;
  })


  it('should be true', () => {
    const userID = "userID";
    expect(controller.findNotificationsSent(userID)).toBeTruthy;
  })

  it('should be true', () => {
    const ID = "userID";
    const seen = true;
    expect(controller.updateSeen(ID,seen)).toBeTruthy;
  })

  it('should be true', () => {
    const ID = "userID";
    const status = "Unread";
    expect(controller.updateRequestNotification(ID,status)).toBeTruthy;
  })

  //Test that function is called and that its output is the correct return type
  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'findNotificationById');
    const found = controller.findNotificationById("ID");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'findNotificationsAll');
    const found = controller.findNotificationsAll();
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'findNotificationsByType');
    const found = controller.findNotificationsByType("userID","notificationType");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'findNotificationsReceived');
    const found = controller.findNotificationsReceived("userID");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'findNotificationsSent');
    const found = controller.findNotificationsSent("userID");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'updateRequestNotification');
    const found = controller.updateRequestNotification("id","status");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'updateRequestNotification');
    const found = controller.updateRequestNotification("id","status");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'updateSeen');
    const found = controller.updateSeen("id",true);
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

  it('should be called and return the right type', () => {
    const findById = jest.spyOn(controller,'createRequestNotification');
    const found = controller.createRequestNotification("userTo","userFrom","notificationType");
    expect(findById).toBeCalled();
    expect(found).toBeInstanceOf(Promise);
  })

});
