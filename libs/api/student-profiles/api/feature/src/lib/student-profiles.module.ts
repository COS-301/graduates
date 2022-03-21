import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentService } from '@graduates/api/student-profiles/service/feature'

@Module({
  providers: [StudentResolver,StudentService],
})
export class StudentProfilesApiModule {}
