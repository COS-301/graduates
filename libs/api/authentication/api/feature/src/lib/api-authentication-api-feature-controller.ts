import { Controller, Get } from '@nestjs/common';
import { ApiAuthenticationServiceFeatureModule } from 'libs/api/authentication/service/feature/src/lib/api-authentication-service-feature.module';

@Controller('api-adminconsole-api-feature')
export class ApiAuthenticationApiFeatureController {

    constructor(private readonly service: ApiAuthenticationServiceFeatureModule) {}

    /*@Get()
    getHello():String{
        return this.service.getHello();
    }*/
}