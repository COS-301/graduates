import { ApiHostingServiceFeatureModule } from '@graduates/api/hosting/service/feature';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ApiHostingResolver } from './api-hosting.resolver';

@Module({
  controllers: [],
  imports: [TerminusModule, HttpModule],
  providers: [ApiHostingResolver,ApiHostingServiceFeatureModule],
  exports: [],
})
export class ApiHostingApiFeatureModule {}
