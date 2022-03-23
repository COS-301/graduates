import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeResolver } from './api-company-representative.resolver';

@Module({
  controllers: [],
  providers: [ApiCompanyRepresentativeResolver],
  exports: [],
})
export class ApiCompanyRepresentativeApiFeatureModule {}
