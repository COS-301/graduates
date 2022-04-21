import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private readonly users = [
  {
    id: '1',
    name:'John',
    email:'JohnDoe@gmail.com',
    password:'admin1',
  },
  {
    id: '2',
    name:'Jake',
    email:'JakeDoe@gmail.com',
    password:'admin2',
  },

  ];


  findAll(){
    return this.users;
  }
  findEverything(){
      return this.users;
  }

  findOne(name: string){
    return this.users.find((user) => user.name ===name);
  }

    
}