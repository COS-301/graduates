import { Module } from '@nestjs/common';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';
import {CqrsModule} from '@nestjs/cqrs'


import { QueryHandlers } from './queries/handlers';

import { DataAccess } from '@graduates/api/company-representative/repository';


@Module({
  imports:[CqrsModule],
  controllers: [],
  providers: [ApiCompanyRepresentativeService,DataAccess,...QueryHandlers],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
