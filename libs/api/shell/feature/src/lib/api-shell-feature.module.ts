import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiExampleFeatureModule],
})
export class ApiShellFeatureModule {}
