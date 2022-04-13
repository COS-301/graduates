import { Injectable } from '@nestjs/common';
import { ApiAdminConsole } from '@graduates/api/adminconsole/api/shared/data-access';

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
