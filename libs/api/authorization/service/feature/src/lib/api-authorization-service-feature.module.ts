import { Module } from '@nestjs/common';
import { GetDeletePermissionHandler } from './queries/handlers/get-delete-permission.handler';
import { GetEditPermissionHandler } from './queries/handlers/get-edit-permission.handler';
import { GetViewPermissionHandler } from './queries/handlers/get-view-permission.handler';
import { ApiAuthorizationService } from './api-authorization.service';

@Module({
  controllers: [],
  providers: [
    ApiAuthorizationService,
    GetDeletePermissionHandler,
    GetEditPermissionHandler,
    GetViewPermissionHandler,
  ],
  exports: [ApiAuthorizationService],
})
export class ApiAuthorizationServiceFeatureModule {}
