import { Module } from "@nestjs/common";
import { ApiAdminconsoleApiFeatureModule } from '@graduates/api/adminconsole/service/feature';
import { ApiAdminConsoleResolver } from "./api-adminconsole.resolver";


@Module({
    controllers:[],
    providers: [ApiAdminConsoleResolver,ApiAdminconsoleApiFeatureModule],
    exports:[],
})
export class ApiAdminconsoleApiFeatureModule{}