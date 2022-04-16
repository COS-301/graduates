import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Notification } from "@graduates/api/notifications/api/shared";
import { ApiNotificationsService } from "@graduates/api/notifications/service/feature";
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Notification)
export class NotificationsResolver {
    constructor(
        private notificationService: ApiNotificationsService
    ) {}

    @Query(() => [Notification])
    async notificationsAll(): Promise<Notification[] | null> {
        const res = await this.notificationService.getAllNoifications();
        return (res) ? res : null;
    }

    @Query(() => Notification)
    async notificationById(@Args('Id', {type: () => String}) id: string): Promise<Notification | null> {
        const res = await this.notificationService.getNotificationsById(id);
        return (res) ? res : null;
        
    }

    @Query(() => [Notification])
    async notificationsReceived(@Args('userId', {type: () => String}) userId: string): Promise<Notification[] | null> {
        const res = await this.notificationService.getNotificationsReceived(userId);
        if (!res) throw new NotFoundException("Notifications Not Found")
        else return res;
    }

    @Query(() => [Notification])
    async notificationsSent(@Args('userId', {type: () => String}) userId: string): Promise<Notification[] | null> {
        const res = await this.notificationService.getNotificationsSent(userId);
        if (!res) throw new NotFoundException("Notifications Not Found")
        else return res;
    }

    @Query(() => [Notification])
    async notificationsByType(
        @Args('userId', {type: () => String}) userId: string, 
        @Args('notificationType', {type: () => String}) notificationType: string
    ): Promise<Notification[] | null> {
        const res = await this.notificationService.getNotificationsByType(userId, notificationType);
        if (!res) throw new NotFoundException("Notifications Not Found")
        else return res;
    }

    @Mutation(()=>Notification)
    async createRequestNotification(
        @Args('userIdTo', {type: () => String}) userIdTo : string,
        @Args('userIdFrom', {type: () => String}) userIdFrom : string,
        @Args('notificationType', {type: () => String}) notificationType : string
    ) : Promise<Notification> {
        const res = await this.notificationService.createRequestNotification(userIdTo, userIdFrom, notificationType)
        return (res) ? res : null;
    }

    @Mutation(()=>Notification)
    async updateRequestNotification(
        @Args('id', {type: () => String}) id : string,
        @Args('status', {type: () => String}) status : string
    ) : Promise<Notification | null> {
        const res = await this.notificationService.updateRequestNotification(id, status);
        return (res) ? res : null;
    }

    @Mutation(()=>Notification)
    async updateSeen(
        @Args('id', {type: () => String}) id : string,
        @Args('seen', {type: () => Boolean}) seen : boolean
    ) : Promise<Notification | null> {
        const res = await this.notificationService.updateSeen(id, seen);
        return (res) ? res : null;
    }
}
