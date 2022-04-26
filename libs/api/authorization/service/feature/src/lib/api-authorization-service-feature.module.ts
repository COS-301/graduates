import { Module } from '@nestjs/common';
import { GetDeletePermissionHandler } from '../lib/queries/handlers/get-delete-permissions.handler';
import { GetEditPermissionHandler } from '../lib/queries/handlers/get-edit-permissions.handler';
import { GetViewPermissionHandler } from '../lib/queries/handlers/get-view-permissions.handler';
import { ApiAuthorizationService } from './api-authorization.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '../../../../repository/data-access/src/lib/api-authorization-repository-admin.repository';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaService } from '../../../../../shared/services/prisma/data-access/src/lib/ApiPrismaService.service';
import { QueryBus } from '@nestjs/cqrs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../../api/shared/src/lib/api-authorization.entity';
import {GetRoleQueryPermissionHandler} from '../lib/queries/handlers/get-role-permissions.handler';
import {GetCompanyIdHandler} from '../lib/queries/handlers/get-companyId-permissions.handler';

@Module({
  controllers: [],
  imports: [],
  providers: [
    ApiAuthorization,
    ApiAuthorizationService,
    QueryBus,
    Adminauthorization,
    PrismaService,
    GetDeletePermissionHandler,
    GetEditPermissionHandler,
    GetViewPermissionHandler,
    GetRoleQueryPermissionHandler,
    GetCompanyIdHandler
  ],
  exports: [ApiAuthorizationService],
})
export class ApiAuthorizationServiceFeatureModule {}
