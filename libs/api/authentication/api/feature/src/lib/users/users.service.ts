import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    async findAll(): Promise<User[]>{
        const user = new User();
        user.id = 1;
        user.name = "John";
        user.email = "JohnDoe@gmail.com"

        return [user];

    }
}
