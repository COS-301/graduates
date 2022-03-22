import { Module } from '@nestjs/common';
import { ApiUpIntegrationServiceFeature } from './api-upintegration-service-feature';
import { ApiUpIntegration } from '@graduates/api/upintegration/api/shared/data-access';

@Module({
  controllers: [],
  imports:[ApiUpIntegration],
  providers: [ApiUpIntegrationServiceFeature],
  exports: [ApiUpIntegrationServiceFeature,ApiUpIntegration],
})
export class ApiUpIntegrationServiceFeatureModule {}