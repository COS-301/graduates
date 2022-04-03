import { Module } from '@nestjs/common';
import { AccessStatusService } from './access-status.service';

@Module({
  controllers: [],
  providers: [AccessStatusService],
  exports: [],
})
export class ApiAccessStatusServiceFeatureModule {}
