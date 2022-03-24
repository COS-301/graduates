import { ApiCompanyRepresentativeService, ApiCompanyRepresentativeServiceFeatureModule,  } from '@graduates/api/company-representative/service/feature';
import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeResolver } from './api-company-representative.resolver';

@Module({
  controllers: [],
  providers: [ApiCompanyRepresentativeResolver],
  imports: [ApiCompanyRepresentativeServiceFeatureModule],
  exports: [ApiCompanyRepresentativeResolver],
})
export class ApiCompanyRepresentativeApiFeatureModule {}
