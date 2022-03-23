import { Module } from '@nestjs/common';
import { CompanyrepService } from './companyrep.service';

@Module({
  providers: [CompanyrepService]
})
export class ApiCompanyrepServiceFeatureModule {}
