import { Module } from '@nestjs/common';
import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../shared/src/lib/api-authorization.entity';

@Module({
  controllers: [],
  providers: [ApiAuthorizationResolver, ApiAuthorization],
  imports: [ApiAuthorizationServiceFeatureModule],
  exports: [ApiAuthorizationResolver],
})
export class ApiAuthorizationApiFeatureModule {}
