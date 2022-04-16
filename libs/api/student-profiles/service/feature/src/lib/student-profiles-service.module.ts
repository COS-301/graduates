import { Module } from '@nestjs/common';
import { ApiStudentProfileService } from './api-student-profiles.service';
import { CommandsService } from './commands/commands.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ApiStudentProfileService, CommandsService],
  exports: [ApiStudentProfileService],
})
export class ApiStudentProfilesServiceModule {}
