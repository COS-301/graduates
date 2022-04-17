import { ApiUpintegrationRepositoryDataAccessModule } from '@graduates/api/upintegration';
import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApiupintegrationService } from './api-upintegration.service';
import * as QueryHandlers from './queries/handlers';
import { UpIntegrationRepository } from '@graduates/api/upintegration/repository/data-access';
@Module({
  imports: [ApiupintegrationServiceModule, CommandBus,CqrsModule],
  controllers: [],
  providers: [ApiupintegrationService, QueryHandlers.getStudentInfoNameHandler, UpIntegrationRepository],
  exports: [ApiupintegrationService],
})
export class ApiupintegrationServiceModule {}
