import { ApiShellFeatureModule } from '@graduates/api/shell/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiShellFeatureModule],
})
export class AppModule {}
