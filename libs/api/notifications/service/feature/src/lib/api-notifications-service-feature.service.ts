import { Injectable } from '@nestjs/common';
import { Notification, NotificationData } from '@graduates/api/notifications/api/shared'
import { GetAllUserNotificationsQuery } from './queries/impl/get-all-user-notifications.query';
import { SendMailEvent } from './events/impl/send-mail.event';
import { QueryBus } from '@nestjs/cqrs';
import { EventBus } from '@nestjs/cqrs';


@Injectable()
export class ApiNotificationsService {
    constructor(private readonly eventBus:EventBus, private readonly queryBus:QueryBus){
        
    }
    
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

    sendToMail(){
        return this.eventBus.publish(new SendMailEvent(this));
    }

    getAllNoifications(){
        return this.queryBus.execute(new GetAllUserNotificationsQuery())
    }
}
