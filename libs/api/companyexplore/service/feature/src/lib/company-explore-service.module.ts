import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { QueryHandlers } from './queries/handlers';
import { CompanyExploreService } from './api-company-explore-service';

@Module({
  imports: [CqrsModule],
  providers: [
    ...QueryHandlers,
    CompanyExploreService
  ],
  exports: [CompanyExploreService],
})
export class CompanyExploreServiceModule {}