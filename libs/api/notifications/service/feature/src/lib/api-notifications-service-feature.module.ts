import { Module } from '@nestjs/common';
import { ApiNotificationsService } from './api-notifications-service-feature.service';
import { CqrsModule, CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { GetAllUserNotificationsHandler, GetNotificationsByIdHandler, GetNotificationsReceivedHandler, GetNotificationsSentHandler, GetNotificationsByTypeHandler } from './queries/api-notifications-service-queries.handlers';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ApiNotificationsService ,CommandBus, QueryBus, EventBus,
    GetAllUserNotificationsHandler, GetNotificationsByIdHandler, GetNotificationsReceivedHandler, GetNotificationsSentHandler, GetNotificationsByTypeHandler
  ],
  exports: [ApiNotificationsService],
})
export class ApiNotificationsServiceFeatureModule {}
