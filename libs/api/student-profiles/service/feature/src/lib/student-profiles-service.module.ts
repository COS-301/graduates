import { Module } from '@nestjs/common';
import { StudentProfileService } from './student-api.service';

@Module({
  imports:[],
  controllers: [],
  providers: [],
  exports: [StudentProfileService],
})
export class StudentProfilesServiceModule {}
