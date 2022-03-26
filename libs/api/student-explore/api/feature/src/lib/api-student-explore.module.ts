import { Module } from '@nestjs/common';
import { ApiStudentExploreResolver } from './api-student-explore.resolver';
import { ApiStudentExploreServiceFeatureModule } from '@graduates/api/student-explore/service/feature';

@Module({
  controllers: [],
  providers: [ApiStudentExploreResolver, ApiStudentExploreServiceFeatureModule],
  exports: [],
})
export class ApiStudentExploreApiFeatureModule {}
