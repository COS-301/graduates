import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import {
  GetAllShortsHandler,
  GetShortByIdHandler,
  CreateShortHandler,
  GetShortByUserHandler,
  GetShortByTagHandler,
} from '@graduates/api/shorts/service/feature';
import { ShortsResolver } from './api-shorts-resolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ShortsRepository,
    GetAllShortsHandler,
    GetShortByIdHandler,
    ShortsResolver,
    PrismaService,
    CreateShortHandler,
    ShortsService,
    GetShortByUserHandler,
    GetShortByTagHandler,
  ],
  exports: [],
})
export class ApiShortsApiFeatureModule {}
