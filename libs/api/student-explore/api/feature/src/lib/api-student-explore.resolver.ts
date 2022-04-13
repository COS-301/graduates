import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
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
  SearchStudents(@Args('searchQuery') searchQuery : string ) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudents(searchQuery);
  }

  @Query(() => [ApiStudentExplore])
  FilterStudents(@Args('filterQuery') filterQuery : string) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.FilterStudents(filterQuery);
  }


}