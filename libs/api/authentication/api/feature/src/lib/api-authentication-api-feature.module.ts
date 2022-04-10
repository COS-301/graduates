import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
// import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class ApiAuthenticationApiFeatureModule {}
