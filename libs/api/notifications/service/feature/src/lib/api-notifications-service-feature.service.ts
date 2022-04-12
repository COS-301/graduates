import { Injectable } from '@nestjs/common';
import { Notification, NotificationData } from '@graduates/api/notifications/api/shared'

@Injectable()
export class ApiNotificationsService {
    async findAll(): Promise<Notification[]> {
        const notificationData = new NotificationData();
        notificationData.notificationType = 'Request'
        const notification = new Notification();
        notification.ID = '00001';
        notification.userIDTo = 'Richard';
        notification.userIDFrom = 'Thabo';
        notification.data = notificationData;
        notification.date = new Date();
        notification.seen = false;
        return [notification];
    }
}
