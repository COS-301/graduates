import { Module } from '@nestjs/common';
import { ApiAuthenticationServiceModule } from '@graduate/libs/api/authentication/service/feature/src/lib/api-authentication-service.module';
import { ApiAuthenticationApiFeatureController } from './api-authentication-api-controller.controller';

@Module({
  imports:[], //Import all the classes that will be used for this feature
  controllers: [ApiAuthenticationApiFeatureController],
  providers: [ApiAuthenticationServiceModule],
  exports: [ApiAuthenticationApiFeatureModule],
})
export class ApiAuthenticationApiFeatureModule {}
