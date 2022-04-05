import { Module } from '@nestjs/common';
import { NotificationsResolver } from './api-notifications-api-feature.resolver';
import { NotificationsService } from '@graduates/api/notifications/service/feature';

@Module({
  imports: [],
  providers: [NotificationsResolver,NotificationsService],
  exports: [],
})
export class ApiNotificationsApiFeatureModule {}
