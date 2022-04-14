import { Strategy, VerifyCallBack } from 'passport-google-oauth20'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { GoogleStrategyCredentials } from '../interfaces/GoogleStrategyCredentials';
import { UserDTO } from '../interfaces/UserDTO';
import { Environment } from '../environment/api-authentication-environment-feature-api';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){

    constructor(){

        const cred = new GoogleStrategyCredentials();
        cred.callbackURL = Environment.callbackURL;
        cred.clientId = Environment.clientId;
        cred.clientSecret = Environment.clientSecret;
        cred.scope = Environment.scope;
        super(cred);
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallBack): Promise<any>{
        const user: UserDTO = new UserDTO();
        user.firstName = profile.name.givenName;
        user.lastName = profile.name.familyName;
        user.picture = profile.photos[0].value;
        
        done(null, user);
    }
}
