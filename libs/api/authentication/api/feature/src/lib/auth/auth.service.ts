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
            const {password, ...result } =user;
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
}







