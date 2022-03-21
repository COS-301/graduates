import { Module } from '@nestjs/common';
import { CompanyrepService } from './companyrep.service';

@Module({
  controllers: [],
  providers: [CompanyrepService],
  exports: [],
})
export class ApiCompanyrepServiceFeatureModule {}
