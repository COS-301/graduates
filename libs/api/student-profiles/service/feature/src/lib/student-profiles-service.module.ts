import { Module } from '@nestjs/common';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { ApiStudentProfileService } from './api-student-profiles.service';
import { CommandsService } from './commands/commands.service';

@Module({
  imports: [ApiStudentProfilesServiceModule, CommandBus,CqrsModule],
  controllers: [],
  providers: [ApiStudentProfileService, CommandsService],
  exports: [ApiStudentProfileService],
})
export class ApiStudentProfilesServiceModule {}
