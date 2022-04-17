import { Module } from '@nestjs/common';
import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';

@Module({
  controllers: [],
  providers: [ApiAuthorizationResolver],
  imports: [ApiAuthorizationServiceFeatureModule],
  exports: [ApiAuthorizationResolver],
})


export class ApiAuthorizationApiFeatureModule {}
