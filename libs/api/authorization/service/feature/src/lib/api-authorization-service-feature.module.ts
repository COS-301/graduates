import { Module } from '@nestjs/common';
import { ApiAuthorizationService } from './api-authorization.service';

@Module({
  controllers: [],
  providers: [ApiAuthorizationService],
  exports: [ApiAuthorizationService],
})


export class ApiAuthorizationServiceFeatureModule {}
