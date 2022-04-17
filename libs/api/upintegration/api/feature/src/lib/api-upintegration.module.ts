import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ApiUpIntegrationServiceFeatureModule} from '@graduates/api/upintegration/service/feature'
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ApiUpIntegrationResolver,
    ApiUpIntegrationServiceFeatureModule,
    PrismaService,
  ],
  exports: [],
})
export class ApiUpintegrationApiFeatureModule {}