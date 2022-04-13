import { ApiAdminConsoleServiceFeatureModule } from "@graduates/api/adminconsole/service/feature";
import { Resolver, Query } from "@nestjs/graphql";
import { ApiAdminConsole } from "@graduates/api/adminconsole/api/shared/data-access";

@Resolver(() => ApiAdminConsole)
export class ApiAdminConsoleResolver{
    constructor(private adminService: ApiAdminConsoleServiceFeatureModule){}

    @Query(() => [ApiAdminConsole])
    adminconsole(): Promise<ApiAdminConsole[]>{
        return this.adminService.getUsers();
    }
}