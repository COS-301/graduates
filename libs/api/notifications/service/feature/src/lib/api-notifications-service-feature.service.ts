import { Injectable } from '@nestjs/common';
import { Notification, NotificationData } from '@graduates/api/notifications/api/shared'
import { 
    GetAllUserNotificationsQuery,
    GetNotificationByIdQuery,
    GetNotificationsReceivedQuery,
    GetNotificationsSentQuery,
    GetNotificationsByTypeQuery

} from './queries/api-notifications-service-queries.query';
import {
    CreateRequestNotificationCommand,
    UpdateRequestNotificationCommand,
    UpdateSeenCommand
}
from './commands/api-notifications-service-commands.command'
import { SendMailEvent } from './events/send-mail.event';
import { QueryBus, CommandBus, EventBus } from '@nestjs/cqrs';


@Injectable()
export class ApiNotificationsService {
    constructor(
        private readonly queryBus:QueryBus, 
        private readonly commandBus:CommandBus, 
        private readonly eventBus:EventBus
    ){}
    sendToMail(){
        return this.eventBus.publish(new SendMailEvent(this));
    }

    async getAllNoifications() : Promise<Notification[]>{
        return await this.queryBus.execute(new GetAllUserNotificationsQuery())
    }

    async getNotificationsById(id: string) : Promise<Notification> { 
        return await this.queryBus.execute(new GetNotificationByIdQuery(id))
    }

    async getNotificationsReceived(userId: string) : Promise<Notification[]> {
        return await this.queryBus.execute(new GetNotificationsReceivedQuery(userId))
    }

    async getNotificationsSent(userId: string) : Promise<Notification[]> {
        return await this.queryBus.execute(new GetNotificationsSentQuery(userId))
    }

    async getNotificationsByType(userId: string, notificationType: string) : Promise<Notification[]> {
        return await this.queryBus.execute(new GetNotificationsByTypeQuery(userId, notificationType));
    }

    async createRequestNotification(userIdTo:string, userIdFrom:string, notificationType:string) : Promise<Notification> {
        return await this.commandBus.execute(new CreateRequestNotificationCommand(userIdTo, userIdFrom, notificationType));
    }
    
    async updateRequestNotification(id:string, status:string) : Promise<Notification> {
        return await this.commandBus.execute(new UpdateRequestNotificationCommand(id, status));
    }

    async updateSeen(id:string, seen:boolean) : Promise<Notification> {
        return await this.commandBus.execute(new UpdateSeenCommand(id,seen));
    }
}
