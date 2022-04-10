import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { QueryHandlers } from './queries/handlers';
import { StudentExploreService } from './api-student-explore-service-feature';

import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';


@Module({
  imports: [CqrsModule],
  providers: [
    //...CommandHandlers,
    ...QueryHandlers,
    StudentExploreService
    //StudentExploreRepository
  ],
  exports: [StudentExploreService, ...QueryHandlers]
})
export class StudentExploreServiceModule {}