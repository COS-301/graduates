import { ApiAdminConsole } from '@graduates/api/adminconsole/repository/data-access'
import { ApiAdminconsoleServiceFeatureModule } from '@graduates/api/adminconsole/service/feature'
import { Query, Resolver } from '@nestjs/graphql'


@Resolver(()=> ApiAdminConsole)
export class ApiAdminConsoleResolver{
    constructor(private adminConsoleService: ApiAdminconsoleServiceFeatureModule){}

    @Query(()=>[ApiAdminConsole])
    adminConsole(): Promise<ApiAdminConsole[]> {
        return null;
    }
      
}