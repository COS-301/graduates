import { Injectable } from '@nestjs/common';
//import { ApiAdminConsole } from '@graduates/api/adminconsole/api/repository/data-access';
import {ApiAdminConsole} from '@graduates/api/adminconsole/repository/data-access';

@Injectable()
export class ApiAdminConsoleServiceFeatureModule {
    async getUsers(): Promise<ApiAdminConsole[]>{
        const user = new ApiAdminConsole();
        user.id = 'u18371435';
        user.email = 'jeepers@gmail.com';
        user.suspended = false;
        user.name = "John Doe";

        return [user];
    }
}
