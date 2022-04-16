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
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';


@Injectable()
export class ApiNotificationsService {
    constructor(
        private readonly queryBus:QueryBus, 
        private readonly commandBus:CommandBus, 
        private readonly eventBus:EventBus
    ){}

    sendToMail(emailFrom:string, emailTo:string, emailSubject:string, emailText:string){
        return this.eventBus.publish(new SendMailEvent(emailFrom, emailTo, emailSubject, emailText));
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

    async requestCV(){
        this.sendToMail("madunathabo2@gmail.com",
        this.emailToUser()[3],
        "Maduna TE has requested your CV",
        "<p>Good day</p>\n <p>please make sure that you send you cv to madunathabo2@gmail.com</p>")
    }

    async currentUser(): Promise<User[]>{
        const  currentUser = new User();
        currentUser.id = '1';
        currentUser.name = 'John';
        currentUser.email = 'JohnDoe@gmail.com';
        return [currentUser];
    }

    async getNameFromID(id:string){
        const currentUser = new User();
        currentUser.id = id;
        currentUser.name = 'T';
        currentUser.email = 'madunathabo2@gmail.com';
        return currentUser.name
    }

    async getEmailFromID(id:string){
        const currentUser = new User();
        currentUser.id = id;
        currentUser.name = 'T';
        currentUser.email = 'madunathabo2@gmail.com';
        return currentUser.email
    }

    async emailToUser(){
        const  user = new User();
        user.id = '2';
        user.name = 'emailer';
        user.email = 'JohnDoe@gmail.com';
        return [ user ];
    }


}
