import { Module } from '@nestjs/common';
import { ApicompanyprofilepageServiceFeatureModule, GetCompanyBioHandler, GetCompanyByIDHander, GetCompanyEmailHandler, GetCompanyLocationHandler, GetCompanyNumberHander, GetCompanyRepHandler, GetCompanySocialMediaHandler, UpdateCompanyBioHandler } from '@graduates/api/companyprofilepage/service/feature';
import { ApicompanyprofilepageResolver } from './api-companyprofilepage.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { CompanyProfilePage } from '@graduates/api/companyprofilepage/repository/data-access';


@Module({
  imports: [CqrsModule],
  providers: [ApicompanyprofilepageResolver,
    ApicompanyprofilepageServiceFeatureModule,
    PrismaService,
    CompanyProfilePage,
    GetCompanyByIDHander,
    GetCompanyEmailHandler,
    GetCompanyLocationHandler,
    GetCompanySocialMediaHandler,
    GetCompanyNumberHander,
    GetCompanyBioHandler,
    GetCompanyRepHandler,
    UpdateCompanyBioHandler
  ],
  exports: [],
})
export class ApicompanyprofilepageApiFeatureModule {}
