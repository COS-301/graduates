import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import {CommandBus, CqrsModule, QueryBus} from '@nestjs/cqrs'


import { QueryHandlers } from './queries/handlers';
import {CommandHandlers} from './commands/handlers'

import { DataAccess } from '@graduates/api/company-representative/repository';


@Module({
  imports:[CqrsModule,QueryBus,CommandBus],
  providers: [ApiCompanyRepresentativeService,DataAccess,...QueryHandlers,QueryBus,CommandBus,...CommandHandlers],
  exports: [ApiCompanyRepresentativeService],
  controllers: [],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
