import { Module } from '@nestjs/common';
import { ApiStudentProfileResolver } from './api-student-profiles.resolver';
import { ApiStudentProfilesServiceModule } from '@graduates/api/student-profiles/service/feature';

@Module({
  controllers: [],
  providers: [ApiStudentProfileResolver],
  imports: [ApiStudentProfilesServiceModule],
  exports: [ApiStudentProfileResolver],
})
export class ApiStudentProfilesModule {}
