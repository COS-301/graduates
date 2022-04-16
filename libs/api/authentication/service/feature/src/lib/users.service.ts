import { Injectable, NotFoundException  } from '@nestjs/common';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { RegisterCommand } from './commands/RgisterCommand';
import { LoginQuery } from './queries/LoginQuery';

@Injectable()
export class UsersService {
    async findAll(): Promise<User[]>{
        const user = new User();
        user.id = '1';
        user.name = 'John';
        user.email = 'JohnDoe@gmail.com';
    

        return [user];

    }

      /*constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
      ) {}*/
   
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
