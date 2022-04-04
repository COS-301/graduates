import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { QueryHandlers } from './queries/handlers';
import { StudentExploreService } from './api-student-explore-service-feature';

@Module({
  imports: [CqrsModule],
  providers: [
    //...CommandHandlers,
    ...QueryHandlers,
    StudentExploreService 
  ],
  exports: [StudentExploreService]
})
export class StudentExploreServiceModule {}