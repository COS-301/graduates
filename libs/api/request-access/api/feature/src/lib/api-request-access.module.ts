import { Module } from '@nestjs/common';
import { ApiRequestAccessResolver } from './api-request-access.resolver';
import { RequestAccessService } from "@graduates/api/request-access/service/feature";
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  controllers: [],
  imports: [CqrsModule],
  providers: [ApiRequestAccessResolver, RequestAccessService],
  exports: [],
})
export class ApiRequestAccessApiFeatureModule {}
