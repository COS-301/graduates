import { Resolver, Query, ID, Args } from "@nestjs/graphql";
import { Notification } from "@graduates/api/notifications/api/shared";
import { NotificationsService } from "@graduates/api/notifications/service/feature";

@Resolver(of => Notification)
export class NotificationsResolver {
    constructor(private notificationService: NotificationsService) {}

    @Query(returns => [Notification])
    async notificationsAll(): Promise<Notification[]> {
        return this.notificationService.findAll();
    }
}