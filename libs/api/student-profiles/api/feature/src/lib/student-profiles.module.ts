import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
import { StudentProfilesServiceModule } from '@graduates/api/student-profiles/service/feature';

@Module({
  controllers: [],
  providers: [StudentResolver],
  imports: [StudentProfilesServiceModule],
  exports: [StudentResolver],
})
export class StudentProfilesApiModule {}
