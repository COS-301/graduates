import { Module } from '@nestjs/common';
import { ApiAccessStatusEntity } from './api-access-status.entity';

@Module({
  controllers: [],
  providers: [],
  exports: [ApiAccessStatusEntity],
})
export class ApiAccessStatusApiSharedModule {}
