import { Module } from '@nestjs/common';
import { ApiAdminconsoleServiceFeatureService } from './api-adminconsole-service-feature.service';

@Module({
  controllers: [],
  providers: [ApiAdminconsoleServiceFeatureService],
  exports: [ApiAdminconsoleServiceFeatureService],
})
export class ApiAdminconsoleServiceFeatureModule {}
