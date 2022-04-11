import { Resolver, Args, Query } from '@nestjs/graphql';
//import { Student } from '@graduates/api/student-explore/repository/data-access';
import { StudentExploreService } from '@graduates/api/student-explore/service/feature';

import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';

@Resolver()
export class ApiStudentExploreResolver {
  constructor(private readonly StudentExploreService: StudentExploreService) {}

  @Query(() => [ApiStudentExplore])
  InitStudent(): Promise<ApiStudentExplore>{
    return this.StudentExploreService.InitStudents();
  }

  @Query(() => [ApiStudentExplore])
  SearchStudentsByTag() : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudentsByTag();
  }

  @Query(() => [ApiStudentExplore])
  SearchStudents() : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudents();
  }

  @Query(() => [ApiStudentExplore])
  FilterStudents() : Promise<ApiStudentExplore>{
    return this.StudentExploreService.FilterStudents();
  }


}