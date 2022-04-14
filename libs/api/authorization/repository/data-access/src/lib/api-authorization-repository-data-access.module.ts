import { Module } from '@nestjs/common';
import {Adminauthorization} from '../lib/api-authorization-repository-admin';
@Module({
  controllers: [],
  providers: [Adminauthorization],
  exports: [],
})
export class ApiAuthorizationRepositoryDataAccessModule {}
