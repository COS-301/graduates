import { Module } from '@nestjs/common';
import { ApiNotificationsService } from './api-notifications-service-feature.service';
import { CqrsModule, CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { 
  GetAllUserNotificationsHandler,
  GetNotificationsByIdHandler,
  GetNotificationsReceivedHandler,
  GetNotificationsSentHandler,
  GetNotificationsByTypeHandler 
} from './queries/api-notifications-service-queries.handlers';
import { 
  CreateRequestNotificationHandler,
  UpdateRequestNotificationHandler,
  UpdateSeenHandler,
  SendMailHandler
} from './commands/api-notifications-service-commands.handlers';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ApiNotificationsService ,CommandBus, QueryBus, EventBus,
    GetAllUserNotificationsHandler, GetNotificationsByIdHandler, GetNotificationsReceivedHandler, GetNotificationsSentHandler, GetNotificationsByTypeHandler,
    CreateRequestNotificationHandler, UpdateRequestNotificationHandler, UpdateSeenHandler, SendMailHandler
  ],
  exports: [ApiNotificationsService],
})
export class ApiNotificationsServiceFeatureModule {}
