import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { CreateUserInput } from '../lib/commands/create-user.input';
import { RegisterCommand } from "../lib/commands/RgisterCommand";
import { LoginQuery } from "../lib/queries/LoginQuery";
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './api-authentication-api-users-service';
import { LoginUserInput } from './queries/login-user-input';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService,
    private jwtService: JwtService) {}


  create(createUserInput: CreateUserInput){
    return 'New user is added'; //Add logic
    // const user= {
    //     ...createUserInput,
    //     id: this.users.length+1,
    // };
    
    // this.users.push(user);
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

    async validateUser(name: string, password: string): Promise<any> {
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


}

  


