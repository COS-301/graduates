import { Module } from '@nestjs/common';

import { ApiAuthorizationService } from './api-authorization.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../../api/shared/src/lib/api-authorization.entity';
import { QueryHandlers } from './queries/handlers';


@Module({
  controllers: [],
  imports: [CqrsModule],
  providers: [
    ...QueryHandlers,
    ApiAuthorization,
    ApiAuthorizationService,
    QueryBus,
    Adminauthorization,
    PrismaService
    

  ],
  exports: [ApiAuthorizationService],
})
export class ApiAuthorizationServiceFeatureModule {}
