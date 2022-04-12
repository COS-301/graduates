import { Module } from '@nestjs/common';
import { ApiNotificationsService } from './api-notifications-service-feature.service';

@Module({
  controllers: [],
  providers: [ApiNotificationsService],
  exports: [ApiNotificationsService],
})
export class ApiNotificationsServiceFeatureModule {}
