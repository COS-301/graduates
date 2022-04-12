import { Injectable } from '@nestjs/common';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { CreateUserInput } from './create-user.input'

// @Injectable()
// export class UsersService {
//     async findAll(): Promise<User[]>{
//         const user = new User();
//         user.id = '1';
//         user.name = 'John';
//         user.email = 'JohnDoe@gmail.com';
    

//         return [user];

//     }
// }

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            username: 'John',
            password: 'admin'
        },

        {
            id: 1,
            username: 'Jake',
            password: 'admin'
        }
    ];



create(createUserInput: CreateUserInput) {

    const user = {
        ...createUserInput,
        id: this.users.length + 1,
    };
    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
