import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Notification, Prisma } from '@prisma/client';

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

}
