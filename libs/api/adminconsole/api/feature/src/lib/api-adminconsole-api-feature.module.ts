import { ApiAdminConsoleServiceFeatureModule } from '@graduates/api/adminconsole/service/feature';
import { Module } from '@nestjs/common';
import { ApiAdminConsoleResolver } from './api-adminconsole.resolver';
@Module({
  controllers: [],
  providers: [ApiAdminConsoleResolver,ApiAdminConsoleServiceFeatureModule],
  exports: [],
})
export class ApiAdminConsoleApiFeatureModule {}
