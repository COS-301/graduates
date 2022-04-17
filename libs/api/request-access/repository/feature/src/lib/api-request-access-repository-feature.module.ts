import { Module } from '@nestjs/common';
import { RequestAccessRepository } from './RequestAccessRepository.repository';

@Module({
  controllers: [],
  providers: [RequestAccessRepository],
  exports: [RequestAccessRepository],
})
export class ApiRequestAccessRepositoryFeatureModule {}
