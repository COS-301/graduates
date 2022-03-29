import { Strategy, VerifyCallBack } from 'passport-google-oauth20'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { GoogleStrategyResponse } from '../interfaces/GoogleStrategyResponse';
import { UserDTO } from '../interfaces/UserDTO';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){

    constructor(){
        super(GoogleStrategyResponse);
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallBack): Promise<any>{
        const user: UserDTO = new UserDTO();
        user.firstName = profile.name.givenName;
        user.lastName = profile.name.familyName;
        user.picture = profile.photos[0].value;
        
        done(null, user);
    }
}
