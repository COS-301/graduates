import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Notification, Prisma } from '@prisma/client';

@Injectable()
export class NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findNotificationsAll() {
    return this.prisma.notification.findMany();
  }

  async findNotificationById(id: string): Promise<Notification | null> {
    return this.prisma.notification.findUnique({
      where: {
        id : id
      }
    });
  }

  async findNotificationsRecieved(userId : string): Promise<Notification[] | null> {
    return this.prisma.notification.findMany({
      where: {
        userIdTo : userId
      }
    });
  }

  async findNotificationsSent(userId : string): Promise<Notification[] | null> {
    return this.prisma.notification.findMany({
      where: {
        userIdFrom : userId
      }
    });
  }

  async findNotificationsByType(userId : string, notificationType : string): Promise<Notification[] | null> {

    return await this.prisma.notification.findMany({
      where: {
        userIdTo : userId,
        data: {
          path: ['notificationType'],
          equals: notificationType
        },
      },
    });
  }

  async updateSeen(id : string, seen : boolean) : Promise<Notification> {
    return await this.prisma.notification.update({
      where: {
        id : id
      },
      data: {
        seen : seen
      }
    });
  }

  async createRequestNotification(userTo : string, userFrom : string, notificationType : string) : Promise<Notification> {
    const json = {
      notificationType: notificationType,
      status: "pending"
    } as Prisma.JsonObject

    return await this.prisma.notification.create({
      data: {
        userIdFrom: userFrom,
        userIdTo: userTo,
        data: json,
        date: new Date(),
        seen: false
      }
    });
  }

  async updateRequestNotification(id : string, status: string) : Promise<Notification> {
    const notification = await this.findNotificationById(id);

    const notificationData = notification.data as Prisma.JsonObject;
    notificationData['status'] = status;

    return await this.prisma.notification.update({
      where: {
        id: id
      },
      data: {
        data : notificationData //this looks confusing but data: {} is a prisma keyword and data is the name of our JSON field
      }
    });
  }
}
