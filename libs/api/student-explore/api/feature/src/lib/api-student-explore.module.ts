import { Module } from '@nestjs/common';
import { ApiStudentExploreResolver } from './api-student-explore.resolver';
//import { StudentExploreService } from '@graduates/api/student-explore/service/feature';
import { StudentExploreServiceModule } from '@graduates/api/student-explore/service/feature';
import { StudentExploreRepository } from '@graduates/api/student-explore/repository/data-access';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access'; 
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { QueryHandlers } from 'libs/api/student-explore/service/feature/src/lib/queries/handlers';
//import { InitStudentsHandler } from 'libs/api/student-explore/service/feature/src/lib/queries/handlers/init-students.handler';

@Module({
  imports: [StudentExploreServiceModule, CqrsModule],
  controllers: [],
  providers: [
    StudentExploreRepository,
    CommandBus,
    //StudentExploreService,
    QueryBus,
    PrismaService,
    ApiStudentExploreResolver,
    //StudentExploreServiceModule,
    //InitStudentsHandler
    //...QueryHandlers
  ]
  
})
export class ApiStudentExploreApiFeatureModule {}
