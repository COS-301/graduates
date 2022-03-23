import { ApicompanyprofilepageServiceFeatureModule } from '@graduates/api/companyprofilepage/service/feature';
import { Module } from '@nestjs/common';
import { ApicompanyprofilepageResolver } from './api-companyprofilepage.resolver';

@Module({
  controllers: [],
  providers: [ApicompanyprofilepageResolver,ApicompanyprofilepageServiceFeatureModule],
  exports: [],
})
export class ApicompanyprofilepageApiFeatureModule {}
