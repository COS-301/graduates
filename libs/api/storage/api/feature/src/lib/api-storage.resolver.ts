import { ApiStorage } from '@graduates/api/storage/api/shared/data-access';
import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Query, Resolver } from '@nestjs/graphql';
//import { FirebaseService } from '@graduates/api/storage/repository/data-access'
@Resolver(() => ApiStorage)
export class ApiStorageResolver {
  constructor(private storageService: ApiStorageServiceFeatureModule) {}

  @Query(() => [ApiStorage])
  storage(): Promise<ApiStorage[]> {
    return this.storageService.get_all();
  }
}
