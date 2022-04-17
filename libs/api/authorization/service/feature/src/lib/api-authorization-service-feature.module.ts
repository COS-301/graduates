import { Module } from '@nestjs/common';
import { GetDeletePermissionHandler } from './queries/handlers/get-delete-permission.handler';
import { GetEditPermissionHandler } from './queries/handlers/get-edit-permission.handler';
import { GetViewPermissionHandler } from './queries/handlers/get-view-permission.handler';
import { ApiAuthorizationService } from './api-authorization.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../repository//data-access/src/lib/api-authorization-repository-admin';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import { CommandBus } from '@nestjs/cqrs';

@Module({
  controllers: [],
  imports: [],
  providers: [
    ApiAuthorizationService,
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
