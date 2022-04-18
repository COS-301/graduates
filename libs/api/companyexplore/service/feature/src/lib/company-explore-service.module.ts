import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { QueryHandlers } from './queries/handlers';
import { CompanyExploreService } from './api-company-explore-service';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ...QueryHandlers,CompanyExploreRepository,PrismaService,
    CompanyExploreService
  ],
  exports: [CompanyExploreService],
})
export class CompanyExploreServiceModule {}