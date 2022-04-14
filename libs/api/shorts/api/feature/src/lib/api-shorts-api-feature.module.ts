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
  DeleteShortHandler,
  UpdateShortHandler,
  GetAllTagsHandler,
  GetTagsByShortIdHandler,
  CreateTagHandler,
  UpdateTagsHandler,
  UpdateTagByShortHandler,
  DeleteTagsHandler,
  DeleteTagsByShortHandler,
  DeleteTagByShortTagHandler,
  GetAllReportsHandler,
  GetReportsByUserHandler,
  GetReportsForShortHandler,
  GetReportHandler,
  CreateReportHandler,
  DeleteReportHandler,
} from '@graduates/api/shorts/service/feature';
import { ShortsResolver } from './api-shorts-resolver.resolver';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ShortsRepository,
    ShortsResolver,
    DeleteTagsByShortHandler,
    DeleteTagsHandler,
    DeleteTagByShortTagHandler,
    PrismaService,
    CreateShortHandler,
    ShortsService,
    UpdateTagByShortHandler,
    GetAllShortsHandler,
    GetAllTagsHandler,
    CreateTagHandler,
    UpdateTagsHandler,
    GetTagsByShortIdHandler,
    GetShortByIdHandler,
    GetShortByUserHandler,
    GetShortByTagHandler,
    DeleteShortHandler,
    UpdateShortHandler,
    GetUserByIdHandler,
    GetAllReportsHandler,
    GetReportsByUserHandler,
    GetReportsForShortHandler,
    GetReportHandler,
    CreateReportHandler,
    DeleteReportHandler,
  ],
  exports: [],
})
export class ApiShortsApiFeatureModule {}
