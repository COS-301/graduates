import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { UsersService } from '@graduates/api/authentication/service/feature';
import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password){
            const {password, ...result } =user;         //result contains the user object without the password
            return result;
        }
        return null;
    }

    async login(user: User){
      
        return {
            access_token: this.jwtService.sign({username:user.username, sub:user}),
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







