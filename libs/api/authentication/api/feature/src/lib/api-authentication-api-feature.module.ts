// import { ApiAuthenticationServiceFeatureModule } from '@graduates/api/authentication/service/feature';
import { ApiAuthenticationResolver } from './api-authentication-api.resolver';
import { Module } from '@nestjs/common';
import {  UsersService } from '@graduates/api/authentication/service/feature';


@Module({
  imports: [],
  controllers: [],
  providers: [ ApiAuthenticationResolver, UsersService],
})
export class ApiAuthenticationApiFeatureModule {}
