import { ApiShellFeatureModule } from '@graduates/api/shell/feature';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ApiShellFeatureModule,ConfigModule.forRoot()],
})
export class AppModule {}
