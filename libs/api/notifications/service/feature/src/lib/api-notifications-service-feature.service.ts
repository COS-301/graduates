import { Injectable, OnModuleInit } from '@nestjs/common';
import { Notification, NotificationData } from '@graduates/api/notifications/api/shared'
import {
    GetAllUserNotificationsQuery,
    GetNotificationByIdQuery,
    GetNotificationsReceivedQuery,
    GetNotificationsSentQuery,
    GetNotificationsByTypeQuery,
    GetUserObjectQuery

} from './queries/api-notifications-service-queries.query';
import {
    CreateRequestNotificationCommand,
    UpdateRequestNotificationCommand,
    UpdateSeenCommand,
    SendMailCommand
}
from './commands/api-notifications-service-commands.command'
import { QueryBus, CommandBus, EventBus } from '@nestjs/cqrs';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { ModuleRef } from '@nestjs/core';


@Injectable()
export class ApiNotificationsService 
{

    constructor(
        private readonly queryBus:QueryBus,
        private readonly commandBus:CommandBus,
        // private readonly eventBus:EventBus,
        private moduleRef: ModuleRef
    ){}

    
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

    async getUserObject(userId: string) : Promise<AuthenticationUser> {
        return await this.queryBus.execute(new GetUserObjectQuery(userId))
    }
    
    async sendToMail(emailFrom:string, emailTo:string, emailSubject:string, emailText:string){
        return this.commandBus.execute(new SendMailCommand(emailFrom, emailTo, emailSubject, emailText));
    }

   
    async requestCV(userEmailFrom:string, userEmailTo:string,){
        const message =  "Good day " + userEmailTo +"\n" + "Your CV has been requested by" + userEmailFrom +" please forward it as soon as possible"
        const  subject = "Graduates: Request for your CV"
        this.sendToMail(userEmailFrom,userEmailTo, subject, message)
    }

    async requestContactDetails(userEmailFrom:string, userEmailTo:string,){
        const message =  "Good day " + userEmailTo +"\n" + "Your contact details has been requested by" + userEmailFrom +" please forward it as soon as possible"
        const  subject = "Graduates: Request for your Contact details"
        this.sendToMail(userEmailFrom,userEmailTo, subject, message)
    }

    async requestAcademicRecord(userEmailFrom:string, userEmailTo:string,){
        const message =  "Good day " + userEmailTo +"\n" + "Your Academic Record has been requested by" + userEmailFrom +" please forward it as soon as possible"
        const  subject = "Graduates: Request for your Academic Record"
        this.sendToMail(userEmailFrom,userEmailTo, subject, message)
    }

    async currentUser(): Promise<AuthenticationUser[]>{
        const  currentUser = new AuthenticationUser();
        currentUser.id = '1';
        currentUser.name = 'John';
        currentUser.email = 'JohnDoe@gmail.com';
        return [currentUser];
    }

    async getNameFromID(id:string){
        const currentUser = new AuthenticationUser();
        currentUser.id = '2';
        currentUser.name = 'T';
        currentUser.email = 'madunathabo2@gmail.com';
        return currentUser.name
    }

    async getEmailFromID(id:string){
        const currentUser = new AuthenticationUser();
        currentUser.id = '3';
        currentUser.name = 'T';
        currentUser.email = 'madunathabo2@gmail.com';
        return currentUser.email
    }

    async emailToUser(){
        const  user = new AuthenticationUser();
        user.id = '4';
        user.name = 'emailer';
        user.email = 'JohnDoe@gmail.com';
        return [ user ];
    }

}
