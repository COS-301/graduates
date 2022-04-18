import { Module } from '@nestjs/common';
import { ApiStudentExploreResolver } from './api-student-explore.resolver';
import { StudentExploreServiceModule } from '@graduates/api/student-explore/service/feature';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access'; 
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';




@Module({
  imports: [StudentExploreServiceModule, CqrsModule],
  controllers: [],
  providers: [
    StudentExploreRepository,
    CommandBus,
    QueryBus,
    PrismaService,
    ApiStudentExploreResolver,
  ]
  
})
export class ApiStudentExploreApiFeatureModule {}
