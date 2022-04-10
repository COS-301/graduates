import { Module } from '@nestjs/common';
import { ApiNotificationsApiFeatureController } from './api-notifications-api-feature.controller';

@Module({
  controllers: [ApiNotificationsApiFeatureController],
  providers: [],
  exports: [],
})
export class ApiNotificationsApiFeatureModule {}
