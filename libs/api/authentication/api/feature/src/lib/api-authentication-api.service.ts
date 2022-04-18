import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { create } from 'domain';
import { CreateUserInput } from './auth/dto/create-user.input';
// import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { RegisterCommand } from "@graduates/api/authentication/service/feature";
import { LoginQuery } from "@graduates/api/authentication/service/feature";
// import { ApiAuthenticationApiSharedInterfacesDataAccessModule } from '../../../../service/feature/src/lib/api-authentication-api-service.module';

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
    name:'John',
    email:'JohnDoe@gmail.com',
    password: 'admin1'
  },
  {
    id: 2,
    name:'Jake',
    email: 'JakeDoe@gmail.com',
    password: 'admin2'
  },

  ];

  create(createUserInput: CreateUserInput){
    return 'New user is added'; //Add logic
    // const user= {
    //     ...createUserInput,
    //     id: this.users.length+1,
    // };
    
    // this.users.push(user);
  }

  findAll(){
    return this.users;
  }

  findOne(name: string){
    return this.users.find((user) => user.name ===name);
  }


  async createUser(userName: string, userEmail: string, userPassword: string) {
    /*return this.commandBus.execute(
      new CreateUserCommand(userName, userEmail, userPassword)
    );*/
  }

  async getUserByEmail(email: string) {
    /*return this.queryBus.execute(
      new GetUserByEmailQuery(email)
    );*/
  }

  register(body: RegisterCommand) {
        throw new Error('Method not implemented.');
    }
    
    authenticate(body: LoginQuery) {
        throw new Error('Method not implemented.');
    }

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

  


