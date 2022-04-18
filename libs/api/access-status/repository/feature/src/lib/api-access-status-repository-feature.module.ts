import { Module } from '@nestjs/common';
import { AccessStatusRepository } from './request-access-status.repository';

@Module({
  controllers: [],
  providers: [AccessStatusRepository],
  exports: [AccessStatusRepository],
})
export class ApiAccessStatusRepositoryFeatureModule {}
