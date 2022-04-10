import { Module } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';

import { QueryHandlers } from './queries/handlers';
import { StudentExploreService } from './api-student-explore-service-feature';

import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';


@Module({
  imports: [CqrsModule],
  providers: [
    //QueryBus,
    //...CommandHandlers,
    ...QueryHandlers,
    StudentExploreService,
    StudentExploreRepository
  ],
  exports: [StudentExploreService]
})
export class StudentExploreServiceModule {}