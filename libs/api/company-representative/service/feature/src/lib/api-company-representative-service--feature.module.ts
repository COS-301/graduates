import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import {CqrsModule} from '@nestjs/cqrs'


import { GetAllRepresentativesHandler } from './queries/handlers/getAllRepresentativesHandler.handler';
import { DataAccess } from '@graduates/api/company-representative/repository';

export const CommandHandlers=[GetAllRepresentativesHandler]

@Module({
  imports:[CqrsModule],
  controllers: [],
  providers: [ApiCompanyRepresentativeService,DataAccess,...CommandHandlers],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
