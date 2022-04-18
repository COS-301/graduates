import { Module } from '@nestjs/common';
import { ApiRequestAccessResolver } from './api-request-access.resolver';
import { RequestAccessService } from "@graduates/api/request-access/service/feature";
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { RequestAccessRepository } from '@graduates/api-request-access-repository-feature';

@Module({
  controllers: [],
  imports: [CqrsModule],
  providers: [ApiRequestAccessResolver, RequestAccessService, RequestAccessRepository, PrismaService],
  exports: [],
})
export class ApiRequestAccessApiFeatureModule {}
