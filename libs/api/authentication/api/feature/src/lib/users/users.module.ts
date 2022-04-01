import { Module } from '@nestjs/common';
import { UsersService } from '@graduates/api/authentication/service/feature';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
