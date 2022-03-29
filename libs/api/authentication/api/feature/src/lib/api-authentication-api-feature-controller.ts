import { Controller, Get } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthenticationServiceFeatureModule } from 'libs/api/authentication/service/feature/src/lib/api-authentication-service-feature.module';

@Controller('api-authentication-api-feature')
export class ApiAuthenticationApiFeatureController {

    constructor(private readonly service: ApiAuthenticationServiceFeatureModule) {}

    /*@Get(':id')
    getHello(@Body(): body: customDTO, @Param('id') userId: String):String{
        return this.service.getHello();
    }*/
}