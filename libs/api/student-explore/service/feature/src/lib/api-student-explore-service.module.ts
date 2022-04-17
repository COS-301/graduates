import { Module } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';

import { QueryHandlers } from './queries/handlers';
import { StudentExploreService } from './api-student-explore-service-feature';

import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';

import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature'; //


@Module({
  imports: [CqrsModule],
  providers: [
    //...CommandHandlers,
    ...QueryHandlers,
    StudentExploreService,
    StudentExploreRepository,
    PrismaService,
    ApiStorageServiceFeatureModule
  
  ],
  exports: [StudentExploreService, PrismaService, ApiStorageServiceFeatureModule]
})
export class StudentExploreServiceModule {}