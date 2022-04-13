import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Notification, Prisma } from '@prisma/client';

@Injectable()
export class NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.notification.findMany();
  }

  async findById(id: string): Promise<Notification | null> {
    return this.prisma.notification.findUnique({ 
      where: { 
        id : id
      }
    });
  }

  async findbyUserIDTo(userId : string): Promise<Notification[] | null> {
    return this.prisma.notification.findMany({
      where: {
        userIdTo : userId
      }
    });
  }

  async findByNotificationType(userId : string, notificationType : string): Promise<Notification[] | null> {

    const notifications =  this.prisma.notification.findMany({ 
      where: {
        userIdTo : userId,
      }
    });

    // (await notifications).forEach(notification => {
    //   if (notification.data && typeof notification.data === 'object' && !Array.isArray(notification.data)) {
    //     const notificationData = notification.data as Prisma.JsonObject
    //     if (notificationData['notificationType'] === notificationType) {

    //     }
    //   }
    // })
    
    return notifications;
  }

}
