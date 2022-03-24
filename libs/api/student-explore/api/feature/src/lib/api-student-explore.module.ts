import { Module } from '@nestjs/common';
import { ApiStudentExploreResolver } from './api-student-explore.resolver';

@Module({
  controllers: [],
  providers: [ApiStudentExploreResolver],
  exports: [],
})
export class ApiStudentExploreApiFeatureModule {}
