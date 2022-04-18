import { Module } from '@nestjs/common';
import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorizationService } from /*'../../../shared/src/lib/api-authorization.entity';*/ '@graduates/api/authorization/service/feature'

@Module({
  controllers: [],
  providers: [ApiAuthorizationResolver, ApiAuthorizationService],
  imports: [ApiAuthorizationServiceFeatureModule],
  exports: [ApiAuthorizationResolver],
})
export class ApiAuthorizationApiFeatureModule {}
