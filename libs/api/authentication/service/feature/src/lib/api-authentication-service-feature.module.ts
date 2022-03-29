import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class ApiAuthenticationServiceFeatureModule {
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
