import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import {
  GetAllShortsHandler,
  GetShortByIdHandler,
  CreateShortHandler,
  GetShortByUserHandler,
  GetShortByTagHandler,
  GetUserByIdHandler,
  GetTagByIdHandler,
  DeleteShortHandler,
} from '@graduates/api/shorts/service/feature';
import { ShortsResolver } from './api-shorts-resolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ShortsRepository,
    ShortsResolver,
    PrismaService,
    CreateShortHandler,
    ShortsService,
    GetAllShortsHandler,
    GetShortByIdHandler,
    GetShortByUserHandler,
    GetShortByTagHandler,
    DeleteShortHandler,
    GetTagByIdHandler,
    GetUserByIdHandler,
  ],
  exports: [],
})
export class ApiShortsApiFeatureModule {}
