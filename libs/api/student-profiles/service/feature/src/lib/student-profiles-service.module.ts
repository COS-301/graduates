import { Module } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiStudentProfileService } from './api-student-profiles.service';
import { CommandsService } from './commands/commands.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ApiStudentProfileService, CommandsService, CommandBus],
  exports: [ApiStudentProfileService],
})
export class ApiStudentProfilesServiceModule {}
