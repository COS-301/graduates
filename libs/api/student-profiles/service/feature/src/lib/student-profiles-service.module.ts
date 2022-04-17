import { ApiStudentProfilesRepositoryDataAccessModule } from '@graduates/api/student-profiles/repository/data-access';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiStudentProfileService } from './api-student-profiles.service';
import * as QueryHandlers from './queries/handlers';
import { StudentProfilesRepository } from '@graduates/api/student-profiles/repository/data-access';
@Module({
  imports: [ApiStudentProfilesRepositoryDataAccessModule, CqrsModule],
  controllers: [],
  providers: [ApiStudentProfileService, QueryHandlers.GetStudentProfileNameHandler, StudentProfilesRepository],
  exports: [ApiStudentProfileService],
})
export class ApiStudentProfilesServiceModule {}
