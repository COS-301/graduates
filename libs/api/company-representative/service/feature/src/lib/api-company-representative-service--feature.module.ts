import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule, EventBus, QueryBus } from '@nestjs/cqrs';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';

import { GetAllRepresentativesHandler, GetOneRepresentativeHandler } from './queries/handlers';
import { CreateCompanyRepresentativeHandler } from './commands/handlers';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';


@Module({
  imports: [CqrsModule],
  controllers:[],
  providers: [
    ApiCompanyRepresentativeService,GetAllRepresentativesHandler,
    GetOneRepresentativeHandler,
    CreateCompanyRepresentativeHandler,
    QueryBus,
    CommandBus,
    EventBus,
    PrismaService],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
