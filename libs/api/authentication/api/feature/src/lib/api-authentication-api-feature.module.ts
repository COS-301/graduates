import { Module } from '@nestjs/common';
import { AppService } from '../../../../service/feature/src/lib/api-authentication-api-feature.service';
import { UsersModule } from './users/users.module';
// import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [
    UsersModule],
  controllers: [],
  providers: [AppService],
})


export class ApiAuthenticationApiFeatureModule {}
