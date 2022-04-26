import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Notification, UserNotification, EmailNotification } from "@graduates/api/notifications/api/shared";
import { ApiNotificationsService } from "@graduates/api/notifications/service/feature";
import { ErrorNotification } from "@graduates/api/notifications/api/shared"

@Resolver(() => Notification)
export class NotificationsResolver {
    constructor(
        private notificationService: ApiNotificationsService
    ) {}

    @Query(() => [Notification])
    async notificationsAll(): Promise<Notification[] | ErrorNotification> {
        const res = await this.notificationService.getAllNoifications();
        const error = new ErrorNotification;
        error.response = "Could not resolve request";
        return (res) ? res : error;
    }

    @Query(() => Notification)
    async notificationById(@Args('Id', {type: () => String}) id: string): Promise<Notification | ErrorNotification> {
        const res = await this.notificationService.getNotificationsById(id);
        const error = new ErrorNotification;
        error.response = "Could not resolve request";
        return (res) ? res : error;
        
    }

    @Query(() => [Notification])
    async notificationsReceived(@Args('userId', {type: () => String}) userId: string): Promise<Notification[] | ErrorNotification> {
        const res = await this.notificationService.getNotificationsReceived(userId);
        const error = new ErrorNotification;
        error.response = "Could not resolve request";
        return (res) ? res : error;
    }

    @Query(() => [Notification])
    async notificationsSent(@Args('userId', {type: () => String}) userId: string): Promise<Notification[] | ErrorNotification> {
        const res = await this.notificationService.getNotificationsSent(userId);
        const error = new ErrorNotification;
        error.response = "Could not resolve request";
        return (res) ? res : error;
    }

    @Query(() => [Notification])
    async notificationsByType(
        @Args('userId', {type: () => String}) userId: string, 
        @Args('notificationType', {type: () => String}) notificationType: string
    ): Promise<Notification[] | ErrorNotification> {
        const res = await this.notificationService.getNotificationsByType(userId, notificationType);
        const error = new ErrorNotification;
        error.response = "Could not resolve request";
        return (res) ? res : error;
    }

    @Query(()=> String)
    pingNotification(){
        return 'on';
    }

    @Mutation(()=>Notification)
    async createRequestNotification(
        @Args('userIdTo', {type: () => String}) userIdTo : string,
        @Args('userIdFrom', {type: () => String}) userIdFrom : string,
        @Args('notificationType', {type: () => String}) notificationType : string
    ) : Promise<Notification | ErrorNotification> {
        const res = await this.notificationService.createRequestNotification(userIdTo, userIdFrom, notificationType)
        const error = new ErrorNotification;
        error.response = "Could not apply mutation";
        return (res) ? res : error;
    }

    @Mutation(()=>Notification)
    async updateRequestNotification(
        @Args('id', {type: () => String}) id : string,
        @Args('status', {type: () => String}) status : string
    ) : Promise<Notification | ErrorNotification> {
        const res = await this.notificationService.updateRequestNotification(id, status);
        const error = new ErrorNotification;
        error.response = "Could not apply mutation";
        return (res) ? res : error;
    }

    @Mutation(()=>Notification)
    async updateSeen(
        @Args('id', {type: () => String}) id : string,
        @Args('seen', {type: () => Boolean}) seen : boolean
    ) : Promise<Notification | ErrorNotification> {
        const res = await this.notificationService.updateSeen(id, seen);
        const error = new ErrorNotification;
        error.response = "Could not apply mutation";
        return (res) ? res : error;
    }

    @Query(() => UserNotification)
    async notificationsGetUser(
        @Args('userId', {type: () => String}) userId: string
    ): Promise<UserNotification | ErrorNotification> {
        const res = await this.notificationService.getUserObject(userId);
        const error = new ErrorNotification;
        error.response = "Could not resolve request";
        return (res) ? res : error;
    }

    @Mutation(()=>EmailNotification)
    async sendEmailForNotification(
        @Args('emailFrom', {type: () => String}) emailFrom: string,
        @Args('emailTo', {type: () => String}) emailTo: string,
        @Args('emailHeading', {type: () => String}) emailSubject: string,
        @Args('emailText', {type: () => String}) emailText: string
    ): Promise<EmailNotification> {

        this.notificationService.sendToMail(emailFrom, emailTo, emailSubject, emailText);
        const emailNotification = new EmailNotification;

        emailNotification.response = "Sent";
        emailNotification.emailFrom = emailFrom;
        emailNotification.emailTo = emailTo;
        emailNotification.emailSubject = emailSubject;
        emailNotification.emailText = emailText;
        return emailNotification;
    }
}
