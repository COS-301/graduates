import { Module } from '@nestjs/common';
import { ApiRequestAccessResolver } from './api-request-access.resolver';
import { ApiRequestAccessService } from './api-request-access.service';

@Module({
  controllers: [],
  providers: [ApiRequestAccessResolver, ApiRequestAccessService],
  exports: [],
})
export class ApiRequestAccessApiFeatureModule {}
