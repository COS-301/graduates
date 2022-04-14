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
    const id = "12312";
    expect(controller.findNotificationById(id)).toBeDefined();
  })

  it('should be defined', () => {
    const userTo = "userTo";
    const userFrom = "userFrom";
    const notificationType = "NotificationType";
    expect(controller.createRequestNotification(userTo, userFrom, notificationType)).toBeDefined();
  })

  it('should be defined', () => {
    expect(controller.findNotificationsAll()).toBeDefined();
  })

  it('should be defined', () => {
    const userID = "userID";
    const notificationType = "notificationType";
    expect(controller.findNotificationsByType(userID,notificationType)).toBeDefined;
  })

  it('should be defined', () => {
    const userID = "userID";
    expect(controller.findNotificationsRecieved(userID)).toBeDefined;
  })

  it('should be defined', () => {
    const userID = "userID";
    expect(controller.findNotificationsSent(userID)).toBeDefined;
  })

  //See if each function is valid if given valid input
  it('should be defined', () => {
    const userTo = "userTo";
    const userFrom = "userFrom";
    const notificationType = "NotificationType";
    expect(controller.createRequestNotification(userTo, userFrom, notificationType)).toBeTruthy();
  })

  it('should be defined', () => {
    const id = "12312";
    expect(controller.findNotificationById(id)).toBeTruthy();
  })


});
