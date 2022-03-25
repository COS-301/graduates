import { NestFactory } from '@nestjs/core';
import { ApiAuthenticationApiFeatureModule } from './api-authentication-api-feature.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiAuthenticationApiFeatureModule);
  await app.listen(3000);
}
bootstrap();