import { Controller, Get, UseGuards,Req } from '@nestjs/common';
import {AuthService} from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
        return
    }

    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req()req) {
        return this.authService.googleLogin(req)
    }

}