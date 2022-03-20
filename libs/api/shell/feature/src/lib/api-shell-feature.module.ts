import { FeatureModule as ApiExampleFeatureModule } from '@graduates/api/example/api/feature';
import { Module } from '@nestjs/common';
import { CompanyrepModule as ApiFeatureModule} from 'libs';

@Module({
  imports: [
    ApiExampleFeatureModule, 
    ApiFeatureModule
  ],
})
export class ApiShellFeatureModule {}
