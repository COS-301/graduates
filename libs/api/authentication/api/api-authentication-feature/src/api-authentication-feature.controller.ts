import {Body, Controller, Get, Post, Req, UseGuard, UseGuards } from '@nestjs/common';
import { ApiAuthenticationService,RegisterCommand, LoginQuery } from '@graduates/uthentication/service';
import { AuthGuard } from '@nestjs/passport';

@Controller('authentication')
export class ApiAuthenticationFeatureController {
  constructor(private readonly service: ApiAuthenticationService) {}

  /*@Get()
  getHello(): string {
    return this.apiAuthenticationFeatureService.getHello();
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
