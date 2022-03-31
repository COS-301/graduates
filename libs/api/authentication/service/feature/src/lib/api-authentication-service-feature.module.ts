import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterCommand } from './commands/RgisterCommand';


@Injectable()
export class ApiAuthenticationServiceFeatureModule {
    authenticate(body: RegisterCommand) {
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
