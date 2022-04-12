import { UsersService } from '@graduates/api/authentication/service/feature';
import { Injectable } from '@nestjs/common';
import { LoginUserInput } from './login-user-input';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password){
            const {password, ...result } =user;
            return result;
        }
        return null;
    }

    async login(loginUserInput: LoginUserInput){

        const user = await this.usersService.findOne(loginUserInput.username);
        const {password, ...result} =user;

        return {
            access_token: 'jwt',
            user: result
        }
    }
}







