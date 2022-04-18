import { ApiHostingServiceFeatureModule } from '@graduates/api/hosting/service/feature';
import { Module } from '@nestjs/common';
import { ApiHostingResolver } from './api-hosting.resolver';

@Module({
  controllers: [],
  providers: [ApiHostingResolver,ApiHostingServiceFeatureModule],
  exports: [],
})
export class ApiHostingApiFeatureModule {}
