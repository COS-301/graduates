import { ApiStudentExplore } from '@graduates/api/student-explore/api/shared/data-access';
import { ApiStudentExploreServiceFeatureModule } from '@graduates/api/student-explore/service/feature';
import { Query, Resolver } from '@nestjs/graphql';
@Resolver(() => ApiStudentExplore)
export class ApiStudentExploreResolver {
  constructor(private storageService: ApiStudentExploreServiceFeatureModule) {}

  @Query(() => [ApiStudentExplore])
  storage(): Promise<ApiStudentExplore[]> {
    return this.storageService.get_all();
  }
}