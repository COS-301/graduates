// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import { Module } from '@nestjs/common';
import { Adminauthorization } from '../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
@Module({
  controllers: [],
  imports: [PrismaService],
  providers: [],
  exports: [Adminauthorization],
})
export class ApiAuthorizationRepositoryDataAccessModule {}
