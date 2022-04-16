import { Module } from '@nestjs/common';
import { AccessStatusService } from './access-status.service';

@Module({
  controllers: [],
  providers: [AccessStatusService],
  exports: [AccessStatusService],
})
export class ApiAccessStatusServiceFeatureModule {}
