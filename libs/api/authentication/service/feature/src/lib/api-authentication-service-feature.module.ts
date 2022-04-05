import { Module } from '@nestjs/common';
import { ApiAuthenticationServiceFeatureService } from './api-authentication-service-feature.service';
import { RegisterCommand } from './commands/RgisterCommand';
import { LoginQuery } from './queries/LoginQuery';

@Module({
  controllers: [],
  providers: [ApiAuthenticationServiceFeatureService],
  exports: [ApiAuthenticationServiceFeatureService],
  imports: [RegisterCommand, LoginQuery]
})
export class ApiAuthenticationServiceFeatureModule {}
