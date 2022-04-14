import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Notification } from '@prisma/client';

@Injectable()
export class NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.notification.findMany();
  }

  async findByNotificationId(id: string): Promise<Notification | null> {
    return this.prisma.notification.findUnique({ 
      where: { 
        id : id
      }
    });
  }

  async findByUserIDTo(userId : string): Promise<Notification[] | null> {
    return this.prisma.notification.findMany({
      where: {
        userIdTo : userId
      }
    });
  }

  async findByNotificationType(userId : string, notificationType : string): Promise<Notification[] | null> {

    const notifications =  await this.prisma.notification.findMany({ 
      where: {
        userIdTo : userId,
        data: { 
          path: ['notificationType'],
          equals: notificationType
        },
      },
    });
    
    return notifications;
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

  // async createNotification(userTo : string, userFrom : string, notificationType : string) : Promise<Notification> {
  //   const json = {
  //     notificationType: notificationType
  //   }
    // const notification = 
  // }

}
