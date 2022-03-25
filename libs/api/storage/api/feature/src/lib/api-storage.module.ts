import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Module } from '@nestjs/common';
import { ApiStorageResolver } from './api-storage.resolver';
@Module({
  controllers: [],
  providers: [ApiStorageResolver, ApiStorageServiceFeatureModule],
  exports: [],
})
export class ApiStorageApiFeatureModule {}
