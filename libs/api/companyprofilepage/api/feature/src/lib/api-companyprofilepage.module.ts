import { Module } from '@nestjs/common';
import { ApicompanyprofilepageServiceFeatureModule, GetCompanyByIDHander, GetCompanyEmailHandler, GetCompanyLocationHandler, GetCompanyNumberHander, GetCompanySocialMediaHandler } from '@graduates/api/companyprofilepage/service/feature';
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
    GetCompanyNumberHander
  ],
  exports: [],
})
export class ApicompanyprofilepageApiFeatureModule {}
