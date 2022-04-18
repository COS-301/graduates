import { Module } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApicompanyprofilepageServiceFeatureModule } from './api-companyprofilepage-service-feature';
import { GetCompanyBioHandler, GetCompanyByIDHander, GetCompanyEmailHandler, GetCompanyLocationHandler, GetCompanyNumberHander, GetCompanyRepHandler, GetCompanySocialMediaHandler } from './queries/api-companyprofilepage-service-query.handler';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ApicompanyprofilepageServiceFeatureModule , QueryBus,
    GetCompanyByIDHander, GetCompanyBioHandler, GetCompanyEmailHandler, GetCompanyLocationHandler, GetCompanyNumberHander, GetCompanySocialMediaHandler, GetCompanyBioHandler, GetCompanyRepHandler
  ],
  exports: [ApicompanyprofilepageServiceFeatureModule],
})
export class ApiNotificationsServiceFeatureModule {}
