import { UsersService } from "./api-authentication-api.service";
import { Query, Resolver } from "@nestjs/graphql";
import { AuthenticationUser } from "@graduates/api/authentication/api/shared/interfaces/data-access";

@Resolver(of => AuthenticationUser)
export class ApiAuthenticationResolver{
    constructor(private apiauthenticationService: UsersService){}

    // @Query(returns => [AuthenticationUser])
    // authentication(): Promise<AuthenticationUser[]>{
    //     return this.apiauthenticationService.getAll();
    // }


    @Query(() => [AuthenticationUser], {name: 'users'})
    findAll(){
        return this.apiauthenticationService.findAll();
    }

    @Query(() =>String) 
    pingAuthentication(){
      return "on";
    }
}





