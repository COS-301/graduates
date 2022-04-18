import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ApiUpIntegrationService} from '@graduates/api/upintegration/service/feature'
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Module({
  imports: [CqrsModule],
  providers: [
    ApiUpIntegrationResolver,
    ApiUpIntegrationService,
    PrismaService,
  ],
  exports: [],
})
export class ApiUpintegrationApiFeatureModule {}