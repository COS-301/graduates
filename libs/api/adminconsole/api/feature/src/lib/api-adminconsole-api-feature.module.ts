import { Module } from '@nestjs/common';
import { ApiAdminconsoleApiFeatureController } from './api-adminconsole-api-feature.controller';

@Module({
  controllers: [ApiAdminconsoleApiFeatureController],
  providers: [],
  exports: [],
})
export class ApiAdminconsoleApiFeatureModule {}
