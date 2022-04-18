import { AccessStatusRepository } from '@graduates/api/access-status/repository/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Module } from '@nestjs/common';
import { ApiAccessStatusResolver } from './api-access-status.resolver';
import { AccessStatusService } from '@graduates/api/access-status/service/feature';
import { forwardRef } from '@nestjs/common';

@Module({
  controllers: [],
  imports: [],
  providers: [ApiAccessStatusResolver, AccessStatusService, AccessStatusRepository, PrismaService],
  exports: [],
})
export class ApiAccessStatusApiFeatureModule {}
