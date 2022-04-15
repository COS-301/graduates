import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Notification } from "@graduates/api/notifications/api/shared";
import { ApiNotificationsService } from "@graduates/api/notifications/service/feature";
import { NotFoundException } from '@nestjs/common';
import { error } from "console";

@Resolver(() => Notification)
export class NotificationsResolver {
    constructor(
        private notificationService: ApiNotificationsService
    ) {}

    @Query(returns => [Notification])
    async notificationsAll(): Promise<Notification[] | null> {
        const res = await this.notificationService.getAllNoifications();
        return (res) ? res : null;
    }

    @Query(returns => Notification)
    async notificationByID(@Args('ID', {type: () => String}) id: string): Promise<Notification | null> {
        const res = await this.notificationService.getNotificationsById(id);
        return (res) ? res : null;
        
    }

    @Query(returns => [Notification])
    async notificationsReceived(@Args('userID', {type: () => String}) userId: string): Promise<Notification[] | null> {
        const res = await this.notificationService.getNotificationsReceived(userId);
        if (!res) throw new NotFoundException("Notifications Not Found")
        else return res;
    }

    @Query(returns => [Notification])
    async notificationsSent(@Args('userID', {type: () => String}) userId: string): Promise<Notification[] | null> {
        const res = await this.notificationService.getNotificationsSent(userId);
        if (!res) throw new NotFoundException("Notifications Not Found")
        else return res;
    }

    @Query(returns => [Notification])
    async notificationsByType(
        @Args('userID', {type: () => String}) userId: string, 
        @Args('notificationType', {type: () => String}) notificationType: string
    ): Promise<Notification[] | null> {
        const res = await this.notificationService.getNotificationsByType(userId, notificationType);
        if (!res) throw new NotFoundException("Notifications Not Found")
        else return res;
    }

    @Mutation(()=>Notification)
    async createRequestNotification(
        @Args('userIDTo', {type: () => String}) userIdTo : string,
        @Args('userIDFrom', {type: () => String}) userIdFrom : string,
        @Args('notificationType', {type: () => String}) notificationType : string
    ) : Promise<Notification | null> {
        const res = await this.notificationService.createRequestNotification(userIdTo, userIdFrom, notificationType)
        return (res) ? res : null;
    }

    @Mutation(()=>Notification)
    async updateRequestNotification(
        @Args('ID', {type: () => String}) id : string,
        @Args('status', {type: () => String}) status : string
    ) : Promise<Notification | null> {
        const res = await this.notificationService.updateRequestNotification(id, status);
        return (res) ? res : null;
    }

    @Mutation(()=>Notification)
    async updateSeen(
        @Args('ID', {type: () => String}) id : string,
        @Args('seen', {type: () => Boolean}) seen : boolean
    ) : Promise<Notification | null> {
        const res = await this.notificationService.updateSeen(id, seen);
        return (res) ? res : null;
    }
}
