import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ApiUpIntegrationService} from '@graduates/api/upintegration/service/feature'
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { UpIntegrationRepository } from '@graduates/api/upintegration/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import{
  GetStudentInfoDegreeHandler,
  GetStudentInfoEmailHandler,
  GetStudentInfoIDHandler,
  GetStudentInfoNameHandler,
  GetStudentInfoPhoneNumberHandler
}from '@graduates/api/upintegration/service/feature'

@Module({
  imports: [CqrsModule],
  providers: [
    ApiUpIntegrationResolver,
    ApiUpIntegrationService,
    PrismaService,
    UpIntegrationRepository,
    GetStudentInfoDegreeHandler,
    GetStudentInfoEmailHandler,
    GetStudentInfoIDHandler,
    GetStudentInfoNameHandler,
    GetStudentInfoPhoneNumberHandler
  ],
  exports: [],
})
export class ApiUpintegrationApiFeatureModule {}