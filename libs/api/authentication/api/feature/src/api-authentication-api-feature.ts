import { NestFactory } from '@nestjs/core';
import { ApiAuthenticationApiFeatureModule } from './lib/api-authentication-api-feature.module';

export * from './lib/api-authentication-api-feature.module';

/*async function bootstrap() {
    const app = await NestFactory.create(ApiAuthenticationApiFeatureModule);
    await app.listen(3001);
}

bootstrap();*/
