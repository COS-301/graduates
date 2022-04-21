import { Module } from '@nestjs/common';
//import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../shared/src/lib/api-authorization.entity';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GetRoleQueryPermissionHandler } from 'libs/api/authorization/service/feature/src/lib/queries/handlers/get-role-permissions.handler';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from 'libs/api/authorization/repository/data-access/src/lib/api-authorization-repository-admin.repository';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GetEditPermissionHandler } from 'libs/api/authorization/service/feature/src/lib/queries/handlers/get-edit-permissions.handler';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GetDeletePermissionHandler } from 'libs/api/authorization/service/feature/src/lib/queries/handlers/get-delete-permissions.handler';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GetViewPermissionHandler } from 'libs/api/authorization/service/feature/src/lib/queries/handlers/get-view-permissions.handler';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GetCompanyIdHandler } from 'libs/api/authorization/service/feature/src/lib/queries/handlers/get-companyId-permissions.handler';

@Module({
  controllers: [],
  providers: [
    ApiAuthorizationResolver,
    ApiAuthorizationService,
    ApiAuthorization,
    Adminauthorization,
    GetRoleQueryPermissionHandler,
    GetCompanyIdHandler,
    GetEditPermissionHandler,
    GetDeletePermissionHandler,
    GetViewPermissionHandler,
    PrismaService,
  ],
  imports: [CqrsModule],
  exports: [ApiAuthorizationResolver],
})
export class ApiAuthorizationApiFeatureModule {}
