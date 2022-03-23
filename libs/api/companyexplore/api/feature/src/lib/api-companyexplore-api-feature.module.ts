import { Module } from '@nestjs/common';
import { CompanyExploreResolver } from './company-explore.resolver';

@Module({
  controllers: [],
  providers: [CompanyExploreResolver],
  exports: [],
})
export class ApiCompanyexploreApiFeatureModule {}
