import { UsersService } from '../api-authentication-api.service';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersResolver
  ],
  exports: [UsersService]
})
export class UsersModule {}
