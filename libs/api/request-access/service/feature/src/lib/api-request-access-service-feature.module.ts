import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RequestAccessService } from './request-access.service';
import { QueryHandlers } from './queries/handlers';
import { RequestAccessRepository } from '@graduates/api-request-access-repository-feature';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ...QueryHandlers,
    RequestAccessService,
    RequestAccessRepository
  ],
  exports: [RequestAccessService],
})
export class ApiRequestAccessServiceFeatureModule {}
