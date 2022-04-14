import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeRepositoryDataAccessService } from './api-company-representative-repository-data-access.service';

@Module({
  controllers: [],
  providers: [ApiCompanyRepresentativeRepositoryDataAccessService],
  exports: [ApiCompanyRepresentativeRepositoryDataAccessService],
})
export class ApiCompanyRepresentativeRepositoryDataAccessModule {}
