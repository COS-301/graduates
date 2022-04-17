import { ApiAdminConsoleServiceFeature } from "@graduates/api/adminconsole/service/feature";
import { Resolver, Query } from "@nestjs/graphql";
//import { ApiAdminConsole } from "@graduates/api/adminconsole/api/repository/data-access";
import {ApiAdminConsole} from "@graduates/api/adminconsole/repository/data-access";
@Resolver(() => ApiAdminConsole)
export class ApiAdminConsoleResolver{
    constructor(private adminService: ApiAdminConsoleServiceFeature){}

    @Query(() => [ApiAdminConsole])
    adminconsole(): Promise<ApiAdminConsole[]>{
        return this.adminService.getUsers("123");
    }
}