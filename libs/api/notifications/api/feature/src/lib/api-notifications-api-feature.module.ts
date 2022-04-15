import { Module } from '@nestjs/common';
import { NotificationsResolver } from './api-notifications-api-feature.resolver';
import { ApiNotificationsService } from '@graduates/api/notifications/service/feature';
import { 
  GetAllUserNotificationsHandler,
  GetNotificationsByIdHandler,
  GetNotificationsReceivedHandler,
  GetNotificationsSentHandler,
  GetNotificationsByTypeHandler,
  CreateRequestNotificationHandler,
  UpdateRequestNotificationHandler,
  UpdateSeenHandler
} from "@graduates/api/notifications/service/feature"
import { CqrsModule } from '@nestjs/cqrs';
import { NotificationsRepository } from '@graduates/api/notifications/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    NotificationsResolver,
    ApiNotificationsService,
    PrismaService,
    NotificationsRepository,
    GetAllUserNotificationsHandler,
    GetNotificationsByIdHandler,
    GetNotificationsReceivedHandler,
    GetNotificationsSentHandler,
    GetNotificationsByTypeHandler,
    CreateRequestNotificationHandler,
    UpdateRequestNotificationHandler,
    UpdateSeenHandler
  ],
  exports: [],
})
export class ApiNotificationsApiFeatureModule {}
