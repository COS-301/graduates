// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import { Module } from '@nestjs/common';
import { Adminauthorization } from './api-authorization-repository-admin';
@Module({
  controllers: [],
  imports: [PrismaService],
  providers: [],
  exports: [Adminauthorization],
})
export class ApiAuthorizationRepositoryDataAccessModule {}
