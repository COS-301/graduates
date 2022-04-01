import { Injectable } from '@nestjs/common';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';

@Injectable()
export class UsersService {
    async findAll(): Promise<User[]>{
        const user = new User();
        user.id = '1';
        user.name = 'John';
        user.email = 'JohnDoe@gmail.com';
    

        return [user];

    }
}
