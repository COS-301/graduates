import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { UsersService } from '../api-authentication-api.service';
import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, 
    private jwtService: JwtService,) {}
    
    //Looks up the user and makes sure that the passwords mathch
    async validateUser(name: string, password: string): Promise<any> {
        // const user = await this.usersService.findOne(username);
        const user = await this.usersService.findOne(name);


        if (user && user.password === password){
            const {password, ...result } =user;         //result contains the user object without the password
            return result;
        }
        return null;
    }

    async login(user: AuthenticationUser){
      
        return {
            access_token: this.jwtService.sign({name:user.name, sub:user.id}),
            user,
        }
    }

    googleLogin(req){
        if(!req.user){
            return 'There is no user'
        }
        return{
            message: 'User info',
            user: req.user
        }

    }
}







