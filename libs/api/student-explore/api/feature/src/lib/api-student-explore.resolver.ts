import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
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
  SearchStudentsByTag(@Args('searchTag') searchTag : string) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudentsByTag(searchTag);
  }

  @Query(() => [ApiStudentExplore])
  SearchStudents(@Args('searchQuery') searchQuery : string ) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.SearchStudents(searchQuery);
  }

  @Query(() => [ApiStudentExplore])
  FilterStudents(@Args('filterQuery') filterQuery : string, @Args('filterType') filterType : string) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.FilterStudents(filterQuery, filterType);
  }

  @Query(() => [ApiStudentExplore])
  AllAvailable(@Args('availableQuery') availableQuery : string) : Promise<ApiStudentExplore>{
    return this.StudentExploreService.AllAvailable(availableQuery);
  }


}