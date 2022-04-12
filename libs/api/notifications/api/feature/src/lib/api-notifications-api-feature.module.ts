import { Module } from '@nestjs/common';
import { NotificationsResolver } from './api-notifications-api-feature.resolver';
import { ApiNotificationsService } from '@graduates/api/notifications/service/feature';

@Module({
  imports: [],
  providers: [NotificationsResolver,ApiNotificationsService],
  exports: [],
})
export class ApiNotificationsApiFeatureModule {}
