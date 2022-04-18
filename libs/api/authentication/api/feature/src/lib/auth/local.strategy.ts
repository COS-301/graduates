import { Strategy } from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super();    
    }

    //Callback of the Local Strategy
    async validate(name:string, password:string): Promise<any> {
        const user = await this.authService.validateUser(name, password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }

}
