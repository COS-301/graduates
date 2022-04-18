import { Module } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';

import { QueryHandlers } from './queries/handlers';
import { StudentExploreService } from './api-student-explore-service-feature';

import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';

import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';


@Module({
  imports: [CqrsModule],
  providers: [
    //...CommandHandlers,
    ...QueryHandlers,
    StudentExploreService,
    StudentExploreRepository,
    PrismaService
  ],
  exports: [StudentExploreService, PrismaService]
})
export class StudentExploreServiceModule {}