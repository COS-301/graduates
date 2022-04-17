import { CompanyRepresentativeRepository } from '@graduates/api/company-representative/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
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
    CompanyRepresentativeRepository
  ],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
