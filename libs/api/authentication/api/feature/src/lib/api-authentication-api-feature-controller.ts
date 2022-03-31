import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthenticationServiceFeatureModule } from 'libs/api/authentication/service/feature/src/lib/api-authentication-service-feature.module';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { RegisterCommand } from 'libs/api/authentication/service/feature/src/lib/commands/RgisterCommand';

@Controller('api-authentication-api-feature')
export class ApiAuthenticationApiFeatureController {

    constructor(private readonly service: ApiAuthenticationServiceFeatureModule) {}

    /*@Get(':id')
    getHello(@Body(): body: customDTO, @Param('id') userId: String):String{
        return this.service.getHello();
    }*/

    @Get('authenticate/google')
    @UseGuards(AuthGuard('google'))
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async googleAuthenticate(@Req() req){
        return "Authenticate";
    }

    @Get('authenticate/google/callback')
    @UseGuards(AuthGuard('google'))
    authRedirect(@Req() req){
        return this.service.googleLogin(req);
    }

    @Post('authenticate')
    authenticate(@Body() body: RegisterCommand){
        this.service.authenticate(body);
    }
}