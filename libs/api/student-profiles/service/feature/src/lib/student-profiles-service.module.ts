import { Module } from '@nestjs/common';
import { ApiStudentProfileService } from './api-student-profiles.service';

@Module({
  imports:[],
  controllers: [],
  providers: [ApiStudentProfileService],
  exports: [ApiStudentProfileService],
})
export class ApiStudentProfilesServiceModule {}
