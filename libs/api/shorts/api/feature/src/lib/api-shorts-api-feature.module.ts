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
import { ShortsResolver } from './shorts/api-shorts-resolver.resolver';
import { ShortsReportsResolver } from './short-reports/api-shorts-reports-resolver.resolver';
import { ShortsTagsResolver } from './short-tags/api-shorts-tags-resolver.resolver';
import {
  ShortsService,
  ShortsReportsService,
  ShortsTagsService,
} from '@graduates/api/shorts/service/feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    // repository
    ShortsRepository,
    //resolvers
    ShortsResolver,
    ShortsReportsResolver,
    ShortsTagsResolver,
    // services
    PrismaService,
    ShortsService,
    ShortsReportsService,
    ShortsTagsService,
    //query handlers
    GetAllShortsHandler,
    GetShortByIdHandler,
    GetShortByUserHandler,
    GetShortByTagHandler,
    GetAllReportsHandler,
    GetReportsByUserHandler,
    GetReportsForShortHandler,
    GetReportHandler,
    GetAllTagsHandler,
    GetTagsByShortIdHandler,
    GetUserByIdHandler,
    // command handlers
    CreateShortHandler,
    CreateReportHandler,
    CreateTagHandler,
    UpdateShortHandler,
    UpdateTagsHandler,
    UpdateTagByShortHandler,
    DeleteShortHandler,
    DeleteReportHandler,
    DeleteTagsByShortHandler,
    DeleteTagsHandler,
    DeleteTagByShortTagHandler,
  ],
  exports: [],
})
export class ApiShortsApiFeatureModule {}
