import { Module } from '@nestjs/common';
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { ApiUpIntegrationServiceFeatureModule} from '../../../../../../api/upintegration/service/feature/src/lib/api-upintegration-service-feature'

@Module({
  controllers: [],
  providers: [ApiUpIntegrationResolver,ApiUpIntegrationServiceFeatureModule],
  exports: [],
})
export class ApiUpintegrationApiFeatureModule {}
