import { Module } from '@nestjs/common';
import { ApiCompanyExploreResolver } from './company-explore.resolver';
import { ApiCompanyExploreServiceModule } from "@graduates/api/companyexplore/service/feature";

@Module({
  controllers: [],
  providers: [ApiCompanyExploreResolver],
  imports: [ApiCompanyExploreServiceModule],
  exports: [ApiCompanyExploreResolver],
})
export class ApiCompanyExploreModule {}
