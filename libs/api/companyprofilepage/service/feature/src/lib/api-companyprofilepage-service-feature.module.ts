import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApicompanyprofilepageServiceFeatureModule } from './api-companyprofilepage-service-feature';
import { UpdateCompanyBioHandler } from './commands/api-companyprofilepage-service-commands.handler';
import { GetCompanyBioHandler, GetCompanyByIDHander, GetCompanyEmailHandler, GetCompanyLocationHandler, GetCompanyNumberHander, GetCompanyRepHandler, GetCompanySocialMediaHandler } from './queries/api-companyprofilepage-service-query.handler';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [
    ApicompanyprofilepageServiceFeatureModule , QueryBus, CommandBus,
    GetCompanyByIDHander, GetCompanyBioHandler, GetCompanyEmailHandler, GetCompanyLocationHandler, GetCompanyNumberHander, GetCompanySocialMediaHandler, GetCompanyBioHandler, GetCompanyRepHandler,
    UpdateCompanyBioHandler
  ],
  exports: [ApicompanyprofilepageServiceFeatureModule],
})
export class ApiNotificationsServiceFeatureModule {}
