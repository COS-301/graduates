import { ApiShellFeatureModule } from '@graduates/api/shell/feature';
import { Module } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';


@Module({
  imports: [ApiShellFeatureModule]
})
export class AppModule {}
