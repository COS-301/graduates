import { Module } from '@nestjs/common';
import { ApiAuthenticationApiFeatureController } from './api-authentication-api-feature-controller';
import { ApiAuthenticationServiceFeatureModule } from 'libs/api/authentication/service/feature/src/lib/api-authentication-service-feature.module';

@Module({
  imports:[], //Import all the classes that will be used for this feature
  controllers: [ApiAuthenticationApiFeatureController],
  providers: [ApiAuthenticationServiceFeatureModule],
  exports: [],
})
export class ApiAuthenticationApiFeatureModule {}
