import { Module } from '@nestjs/common';
//import { ApiAuthorizationServiceFeatureModule } from '@graduates/api/authorization/service/feature';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../shared/src/lib/api-authorization.entity';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Adminauthorization } from '@graduates/api/authorization/repository/data-access';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  GetRoleQueryPermissionHandler,
  GetCompanyIdHandler,
  GetViewPermissionHandler,
  GetDeletePermissionHandler,
  GetEditPermissionHandler,
} from '@graduates/api/authorization/service/feature';

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
