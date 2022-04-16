import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { ApiHostingServiceFeatureModule} from '@graduates/api/hosting/service/feature';
import { Query, Resolver } from '@nestjs/graphql';
@Resolver(() => ApiHosting)
export class ApiHostingResolver {
  constructor(private hostingService: ApiHostingServiceFeatureModule) {}

  @Query(() => [ApiHosting])
  hosting(): Promise<ApiHosting[]> {
    return this.hostingService.get_all();
  }
}
