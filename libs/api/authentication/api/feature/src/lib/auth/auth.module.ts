import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
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
