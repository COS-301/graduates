import { Module } from '@nestjs/common';
import { ApiNotificationsController } from './api-notifications.controller';
import { ApiNotificationsService } from './api-notifications.service';

@Module({
  controllers: [ApiNotificationsController],
  providers: [ApiNotificationsService],
  exports: [ApiNotificationsService],
})
export class ApiNotificationsModule {}
