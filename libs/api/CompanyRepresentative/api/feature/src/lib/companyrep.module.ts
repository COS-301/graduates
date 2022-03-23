import { ApiCompanyrepServiceFeatureModule, CompanyrepService } from '@graduates/api-CompanyRepresentative-service';
import { Module } from '@nestjs/common';
import { CompanyrepResolver } from './companyrep.resolver';

@Module({
  providers: [CompanyrepResolver, CompanyrepService],
  imports: [ApiCompanyrepServiceFeatureModule]
})
export class CompanyrepModule {}
