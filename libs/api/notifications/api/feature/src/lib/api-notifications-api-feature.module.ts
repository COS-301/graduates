import { Module } from '@nestjs/common';
import { NotificationsResolver } from './api-notifications-api-feature.resolver';
import { ApiNotificationsService } from '@graduates/api/notifications/service/feature';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [NotificationsResolver,ApiNotificationsService],
  exports: [],
})
export class ApiNotificationsApiFeatureModule {}
