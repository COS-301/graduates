import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy, LocalStrategy, AuthService } from '@graduates/api/authentication/service/feature';
//import { GoogleStrategy } from '@graduates/api/authentication/service/feature';

@Module({
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy, //GoogleStrategy
],
  imports: [PassportModule, UsersModule, JwtModule.register({
    signOptions: {expiresIn: '60s'},
    secret: 'secret-key',
}),
],
})
export class AuthModule {}
