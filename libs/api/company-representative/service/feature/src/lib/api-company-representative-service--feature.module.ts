import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';

@Module({
  controllers: [],
  providers: [ApiCompanyRepresentativeService],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
