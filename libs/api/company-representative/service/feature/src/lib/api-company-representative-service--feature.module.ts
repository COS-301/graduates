import { CompanyRepresentativeRepository } from '@graduates/api/company-representative/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule],
  controllers:[],
  providers: [
    ...QueryHandlers,
    ...CommandHandlers,
    ApiCompanyRepresentativeService,
    PrismaService,
    CompanyRepresentativeRepository,
    ApiStorageServiceFeatureModule
  ],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
