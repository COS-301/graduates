import { Module } from '@nestjs/common';
import { ApiAuthenticationApiFeatureController } from './api-authentication-api-feature-controller';
import {ApiAuthenticationServiceFeatureModule} from 'libs/api/authentication/service/feature/src/lib/api-authentication-service-feature.module'

@Module({
  controllers: [ApiAuthenticationApiFeatureController],
  providers: [ApiAuthenticationServiceFeatureModule],
  exports: [],
})
export class ApiAuthenticationApiFeature {}
