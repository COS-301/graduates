import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RequestAccessService } from './request-access.service';

import { QueryHandlers } from './queries/handlers';
@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ...QueryHandlers,
    RequestAccessService],
  exports: [RequestAccessService],
})
export class ApiRequestAccessServiceFeatureModule {}
