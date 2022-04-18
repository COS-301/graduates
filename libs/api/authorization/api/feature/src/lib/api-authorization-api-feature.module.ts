import { Module } from '@nestjs/common';
//import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ApiAuthorization} from '../../../shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';

@Module({
  controllers: [],
  providers: [ApiAuthorizationResolver, ApiAuthorizationService,ApiAuthorization,QueryBus],
  imports: [],
  exports: [ApiAuthorizationResolver],
})
export class ApiAuthorizationApiFeatureModule {}
