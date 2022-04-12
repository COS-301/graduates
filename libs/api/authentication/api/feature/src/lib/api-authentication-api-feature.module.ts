import { ApiAuthenticationServiceFeatureModule } from '@graduates/api/authentication/service/feature';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { UsersResolver } from './users/users.resolver';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ApiAuthenticationServiceFeatureModule, AuthModule],
  controllers: [],
  providers: [ApiAuthenticationApiFeatureModule],
})
export class ApiAuthenticationApiFeatureModule {}
