import { AuthService } from '@graduates/api/authentication/service/feature';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [AuthService, UsersResolver
  ],
  exports: [AuthService]
})
export class UsersModule {}
