import { Module } from '@nestjs/common';
import { RequestAccessService } from './request-access.service';

@Module({
  controllers: [],
  providers: [RequestAccessService],
  exports: [RequestAccessService],
})
export class ApiRequestAccessServiceFeatureModule {}
