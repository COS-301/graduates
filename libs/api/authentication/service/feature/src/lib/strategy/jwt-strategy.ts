import {ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

Injectable()
export class JwtStrategy extends PassportStrategy (Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secret-key',
        });
    }

    async validate(payload: any){       //Decoded JWT
        return { userId: payload.sub, name:payload.name };
    }
}