import { Module } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApicompanyprofilepageServiceFeatureModule } from './api-companyprofilepage-service-feature';
import { GetCompanyByIDHander } from './queries/api-companyprofilepage-service-query.handler';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ApicompanyprofilepageServiceFeatureModule , QueryBus,
    GetCompanyByIDHander,
  ],
  exports: [ApicompanyprofilepageServiceFeatureModule],
})
export class ApiNotificationsServiceFeatureModule {}
