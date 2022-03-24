import { Module } from '@nestjs/common';
import { ApiCompanyExploreService } from './company-explore-api.service';

@Module({
  controllers: [],
  providers: [ApiCompanyExploreService],
  exports: [ApiCompanyExploreService],
})
export class ApiCompanyExploreServiceModule {}