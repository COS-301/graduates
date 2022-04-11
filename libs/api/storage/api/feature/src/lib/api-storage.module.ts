import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Module } from '@nestjs/common';
import { ApiStorageResolver } from './api-storage.resolver';
import { FirebaseService } from '@graduates/api/storage/repository/data-access'
@Module({
  controllers: [],
  providers: [ApiStorageResolver, ApiStorageServiceFeatureModule,FirebaseService],
  exports: [],
})
export class ApiStorageApiFeatureModule {}
