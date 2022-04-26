import { Module } from '@nestjs/common';
import { ApiCompanyExploreResolver } from './company-explore.resolver';
import { CompanyExploreServiceModule } from "@graduates/api/companyexplore/service/feature";
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
@Module({
  controllers: [],
  providers: [ApiCompanyExploreResolver,CompanyExploreRepository,PrismaService],
  imports: [CompanyExploreServiceModule],
  exports: [ApiCompanyExploreResolver],
})
export class ApiCompanyExploreModule {}
