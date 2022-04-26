import { ApiAuthenticationResolver } from './api-authentication-api.resolver';
import {Module } from '@nestjs/common';
import { AuthService, JwtStrategy, LocalStrategy, UsersService } from '@graduates/api/authentication/service/feature';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from '@graduates/api/authentication/service/feature';



@Module({
  providers: [AuthService, UsersService, ApiAuthenticationResolver, LocalStrategy, JwtStrategy, GoogleStrategy, PassportModule
  ],
  imports: [PassportModule, JwtModule.register({
        signOptions: {expiresIn: '60s'},
        secret: 'secret-key', 
    }),
    ],
})
export class ApiAuthenticationApiFeatureModule {}


