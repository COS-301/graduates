import { ApiAuthenticationServiceFeatureService } from '@graduates/api/authentication/service/feature';
import { Module } from '@nestjs/common';
import { ApiAuthenticationApiFeatureController } from './api-authentication-api-feature.controller';

@Module({
  controllers: [ApiAuthenticationApiFeatureController],
  providers: [ApiAuthenticationServiceFeatureService ],
  exports: [],
  imports: []
})
export class ApiAuthenticationApiFeatureModule {}
