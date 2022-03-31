import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterCommand } from './commands/RgisterCommand';
import { LoginQuery } from './queries/LoginQuery';


@Injectable()
export class ApiAuthenticationServiceFeatureModule {

    register(body: RegisterCommand) {
        throw new Error('Method not implemented.');
    }
    
    authenticate(body: LoginQuery) {
        throw new Error('Method not implemented.');
    }

    googleLogin(req: any) {
        if(!req.user){
            return new NotFoundException('User does not exist');
        }
        else{
            return{
                status: 200,
                user: req.user
            } 
        }
    }
  
}
