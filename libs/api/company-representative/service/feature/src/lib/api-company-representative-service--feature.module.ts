import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';

import { GetAllRepresentativesHandler, GetOneRepresentativeHandler } from './queries/handlers';

@Module({
  controllers: [CqrsModule],
  providers: [ApiCompanyRepresentativeService,GetAllRepresentativesHandler,GetOneRepresentativeHandler],
  exports: [ApiCompanyRepresentativeService],
})
export class ApiCompanyRepresentativeServiceFeatureModule {}
