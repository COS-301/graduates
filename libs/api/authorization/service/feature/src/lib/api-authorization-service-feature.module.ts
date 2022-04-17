import { Module } from '@nestjs/common';
import { GetDeletePermissionHandler } from '../../../../service/feature/src/lib/queries/handlers/get-delete-permission.handler';
import { GetEditPermissionHandler } from '../../../../service/feature/src/lib/queries/handlers/get-edit-permission.handler';
import { GetViewPermissionHandler } from '../../../../service/feature/src/lib/queries/handlers/get-view-permission.handler';
import { ApiAuthorizationService } from './api-authorization.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiAuthorization } from '@graduates/api/authorization/api/shared';

@Module({
  controllers: [],
  imports: [],
  providers: [
    ApiAuthorizationService,
    QueryBus,
    ApiAuthorization,
    CommandBus,
    Adminauthorization,
    PrismaService,
    GetDeletePermissionHandler,
    GetEditPermissionHandler,
    GetViewPermissionHandler,
  ],
  exports: [ApiAuthorizationService],
})
export class ApiAuthorizationServiceFeatureModule {}
