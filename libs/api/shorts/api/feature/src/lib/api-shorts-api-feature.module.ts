import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { GetAllShortsHandler } from '@graduates/api/shorts/service/feature';
import { ShortsResolver } from './ApiShortsResolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ShortsRepository,
    GetAllShortsHandler,
    ShortsResolver,
    PrismaService,
    ShortsService,
  ],
  exports: [],
})
export class ApiShortsApiFeatureModule {}
