// import { ApiAuthenticationServiceFeatureModule } from '@graduates/api/authentication/service/feature';
import { ApiAuthenticationResolver } from './api-authentication-api.resolver';
import { forwardRef, Module } from '@nestjs/common';
// import {  UsersService } from '@graduates/api/authentication/service/feature';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule,AuthModule],
  controllers: [],
  providers: [ ApiAuthenticationResolver, //UsersService
  ],
})
export class ApiAuthenticationApiFeatureModule {}
