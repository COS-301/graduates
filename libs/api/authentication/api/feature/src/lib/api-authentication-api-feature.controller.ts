import { ApiAuthenticationServiceFeatureService } from '@graduates/api/authentication/service/feature';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegisterCommand } from 'libs/api/authentication/service/feature/src/lib/commands/RgisterCommand';
import { LoginQuery } from 'libs/api/authentication/service/feature/src/lib/queries/LoginQuery';

@Controller('api-authentication-api-feature')
export class ApiAuthenticationApiFeatureController {
    
    constructor(private readonly service: ApiAuthenticationServiceFeatureService) {}

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

    @Post('register')
    register(@Body() body: RegisterCommand){
        this.service.register(body);
    }

    @Post('authenticate')
    authenticate(@Body() body: LoginQuery){
        this.service.authenticate(body);
    }
}
