import { Module } from '@nestjs/common';
import { ApiCompanyExploreResolver } from './company-explore.resolver';
import { CompanyExploreServiceModule } from "@graduates/api/companyexplore/service/feature";

@Module({
  controllers: [],
  providers: [ApiCompanyExploreResolver],
  imports: [CompanyExploreServiceModule],
  exports: [ApiCompanyExploreResolver],
})
export class ApiCompanyExploreModule {}
