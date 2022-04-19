// import { ApiAuthenticationServiceFeatureModule } from '@graduates/api/authentication/service/feature';
import { ApiAuthenticationResolver } from './api-authentication-api.resolver';
import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from '@graduates/api/authentication/service/feature';
// import { UsersService } from '@graduates/api/authentication/service/feature';
//import { UsersService } from '@graduates/api/authentication/service/feature';
//import { ApiAuthenticationApiSharedInterfacesDataAccessModule } from '@graduates/api/authentication/service/feature';


@Module({
  imports: [UsersModule, AuthModule, AuthService
    //ApiAuthenticationApiSharedInterfacesDataAccessModule
  ],
  controllers: [],
  providers: [ ApiAuthenticationResolver, AuthService 
  ],
})
export class ApiAuthenticationApiFeatureModule {}
