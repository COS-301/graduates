import { Module } from '@nestjs/common';
import { StudentService } from './student-api.service';

@Module({
  controllers: [],
  providers: [StudentService],
  exports: [StudentService],
})
export class ApiStudentProfilesServiceFeatureModule {}
