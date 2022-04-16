import { Module } from '@nestjs/common';
import { CompanyRepresentativeRepository } from './company-representative.repository';

@Module({
  controllers: [],
  providers: [CompanyRepresentativeRepository],
  exports: [CompanyRepresentativeRepository],
})
export class ApiCompanyRepresentativeRepositoryDataAccessModule {}
