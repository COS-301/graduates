// import { ApiAuthenticationServiceFeatureModule } from '@graduates/api/authentication/service/feature';
import { ApiAuthenticationResolver } from './api-authentication-api.resolver';
import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
//import { ApiAuthenticationApiSharedInterfacesDataAccessModule } from '@graduates/api/authentication/service/feature';


@Module({
  imports: [UsersModule,AuthModule, //ApiAuthenticationApiSharedInterfacesDataAccessModule
  ],
  controllers: [],
  providers: [ ApiAuthenticationResolver, 
  ],
})
export class ApiAuthenticationApiFeatureModule {}
