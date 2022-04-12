import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService],
})
export class ApiAuthenticationServiceFeatureModule {}
