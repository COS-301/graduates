import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeService } from './api-company-representative/api-company-representative.service';

@Module({
  controllers: [],
  providers: [ApiCompanyRepresentativeService],
  exports: [],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
