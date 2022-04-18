import { Module } from '@nestjs/common';
import {user_permissions,User_role,role_permissions} from './authorization-data-access.entity'
@Module({
  controllers: [],
  providers: [],
  exports: [user_permissions,User_role,role_permissions],
})
export class ApiAuthorizationRepositorySharedModule {}
