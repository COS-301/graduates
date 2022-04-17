import { UsersService } from "@graduates/api/authentication/service/feature";
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, UsersResolver
  ],
  exports: [UsersService]
})
export class UsersModule {}
