import { Module } from '@nestjs/common';
import { ApihostingResolver } from './api-hosting.resolver';
import { ApihostingServiceFeatureModule} from '../../../../../../api/hosting/service/feature/src/lib/api-hosting-service-feature'
@Module({
  controllers: [],
  providers: [
    ApihostingResolver,
    ApihostingServiceFeatureModule,
  ],
  exports: [],
})
export class ApihostingApiFeatureModule {}
