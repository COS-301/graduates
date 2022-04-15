import { Injectable } from '@nestjs/common';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { create } from 'domain';
import { CreateUserInput } from './users';

@Injectable()
export class UsersService {
  // async getAll(): Promise<AuthenticationUser[]>{
  //   const authenticationuser = new AuthenticationUser();

  //   authenticationuser.id = "1";
  //   authenticationuser.username = "John";
  //   authenticationuser.password = "admin1"
  //   authenticationuser.dummy = "dummy";

  //   return [authenticationuser];

  private readonly users = [
  {
    id: 1,
    username:'John',
    password: 'admin1'
  },
  {
    id: 2,
    username:'Jake',
    password: 'admin2'
  },

  ];

  create(createUserInput: CreateUserInput){
    return 'New user is added'; //Add logic
    const user= {
        ...createUserInput,
        id: this.users.length+1,
    };
    
    this.users.push(user);
  }

  findAll(){
    return this.users;
  }

  findOne(username: string){
    return this.users.find((user) => user.username ===username);
  }

    
}

  


