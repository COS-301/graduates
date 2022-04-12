import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import {CqrsModule, QueryBus} from '@nestjs/cqrs'


import { GetAllRepresentativesHandler } from './queries/handlers/getAllRepresentativesHandler.handler';
import { GetOneRepresentativeHanlder } from './queries/handlers/getOneRepresentativeHandler';

import { DataAccess } from '@graduates/api/company-representative/repository';

export const CommandHandlers=[GetAllRepresentativesHandler,GetOneRepresentativeHanlder]

@Module({
  imports:[CqrsModule,QueryBus],
  controllers: [],
  providers: [ApiCompanyRepresentativeService,DataAccess,...CommandHandlers],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
