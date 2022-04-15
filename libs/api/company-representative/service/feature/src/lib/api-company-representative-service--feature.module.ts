import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';

import { GetAllRepresentativesHandler, GetOneRepresentativeHandler } from './queries/handlers';
import { CreateCompanyRepresentativeHandler } from './commands/handlers';

@Module({
  controllers: [CqrsModule],
  providers: [ApiCompanyRepresentativeService,GetAllRepresentativesHandler,GetOneRepresentativeHandler,CreateCompanyRepresentativeHandler,QueryBus,CommandBus],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
