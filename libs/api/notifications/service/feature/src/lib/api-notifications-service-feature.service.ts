import { Injectable } from '@nestjs/common';
import { Notification, NotificationData } from '@graduates/api/notifications/api/shared'
import { GetAllUserNotificationsQuery } from './queries/api-notifications-service-queries.query';
import { SendMailEvent } from './commands/send-mail.event';
import { QueryBus, CommandBus } from '@nestjs/cqrs';


@Injectable()
export class ApiNotificationsService {
    constructor(private readonly queryBus:QueryBus, private readonly commandBus:CommandBus){}
    
    async findAllMock(): Promise<Notification[]> {
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
        return this.commandBus.execute(new SendMailEvent(this));
    }

    getAllNoifications(){
        return this.queryBus.execute(new GetAllUserNotificationsQuery())
    }
}
