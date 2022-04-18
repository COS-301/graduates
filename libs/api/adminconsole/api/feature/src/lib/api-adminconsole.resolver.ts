// import { ApiAdminConsoleServiceFeature } from "@graduates/api/adminconsole/service/feature";
import { Resolver, Query } from "@nestjs/graphql";
//import { ApiAdminConsole } from "@graduates/api/adminconsole/api/repository/data-access";
import {User} from "@graduates/api/adminconsole/repository/data-access";
@Resolver(() => User)
export class ApiAdminConsoleResolver{
    // constructor(private adminService: ApiAdminConsoleServiceFeature){}

    // @Query(() => [User])
    // adminconsole(): Promise<User[]>{
    //     return this.adminService.getUsers();
    // }

    @Query(() =>String) 
    pingAdminconsole(){
        return "on";
    }
}