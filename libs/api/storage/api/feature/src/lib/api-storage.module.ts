import { Module } from '@nestjs/common';
import { ApiStorageResolver } from './api-storage.resolver';
import { ApiStorageServiceFeatureModule} from '../../../../../../api/storage/service/feature/src/lib/api-storage-service-feature'
@Module({
  controllers: [],
  providers: [ApiStorageResolver,ApiStorageServiceFeatureModule],
  exports: [],
})
export class ApiStorageApiFeatureModule {}
