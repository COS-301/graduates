import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApiStudentProfileService } from './api-student-profiles.service';
import * as QueryHandlers from './queries/handlers';
import * as CommandHandlers from './commands/handlers';
import { StudentProfilesRepository } from '@graduates/api/student-profiles/repository/data-access';
@Module({
  imports: [ApiStudentProfilesServiceModule, CommandBus, CqrsModule],
  controllers: [],
  providers: [
    ApiStudentProfileService,
    QueryHandlers.GetStudentProfileNameHandler,
    QueryHandlers.GetStudentProfileDOBHandler,
    QueryHandlers.GetStudentProfileBioHandler,
    QueryHandlers.GetStudentProfileEmailsHandler,
    QueryHandlers.GetStudentProfileEmploymentStatusHandler,
    QueryHandlers.GetStudentProfileFilesHandler,
    QueryHandlers.GetStudentProfileLocationHandler,
    QueryHandlers.GetStudentProfilePFPHandler,
    QueryHandlers.GetStudentProfileSocialMediaHandler,
    QueryHandlers.GetStudentProfileTagsHandler,
    CommandHandlers.DeleteStudentProfileFilesHandler,
    CommandHandlers.DeleteStudentProfileSocialMediaHandler,
    CommandHandlers.DeleteStudentProfileTagsHandler,
    CommandHandlers.SetStudentProfileBioHandler,
    CommandHandlers.SetStudentProfileEmailHandler,
    CommandHandlers.SetStudentProfileFilesHandler,
    CommandHandlers.SetStudentProfileLocationHandler,
    CommandHandlers.SetStudentProfileNameHandler,
    CommandHandlers.SetStudentProfileProfilePictureHandler,
    CommandHandlers.SetStudentProfileSocialMediaHandler,
    CommandHandlers.SetStudentProfileTagsHandler,
    StudentProfilesRepository,
  ],
  exports: [ApiStudentProfileService],
})
export class ApiStudentProfilesServiceModule {}
