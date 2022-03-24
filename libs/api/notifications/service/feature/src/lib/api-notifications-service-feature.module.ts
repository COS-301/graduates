import { Module } from '@nestjs/common';
import { ApiNotificationsServiceFeatureService } from './api-notifications-service-feature.service';

@Module({
  controllers: [],
  providers: [ApiNotificationsServiceFeatureService],
  exports: [ApiNotificationsServiceFeatureService],
})
export class ApiNotificationsServiceFeatureModule {}
