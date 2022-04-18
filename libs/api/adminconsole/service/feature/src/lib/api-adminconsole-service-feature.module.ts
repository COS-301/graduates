import { UpdateBlogArchivedHandler } from '@graduates/api/blog/service/feature';
import { Module} from '@nestjs/common';
import {CqrsModule} from '@nestjs/cqrs';
import { ApiAdminConsoleServiceFeature } from './api-adminconsole-service-feature.service';
import { AddPermissionHandler } from './commands/handlers/add-permission.handler';
import { AddRoleHandler } from './commands/handlers/add-role.handler';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { EditUserHandlers } from './commands/handlers/edit-user.handlers';
import { RemovePermissionHandler } from './commands/handlers/remove-permission.handler';
import { RemoveRoleHandler } from './commands/handlers/remove-role.handler';
import { SuspendUserHandler } from './commands/handlers/suspend-user.handler';
import { UnsuspendUserHandler } from './commands/handlers/unsuspend-user.handler';
import { GetBlogsHandler } from './queries/handlers/get-blogs.handler';
import { GetPermissionsHandler } from './queries/handlers/get-permissions.handler';
import { GetRolesHandler } from './queries/handlers/get-roles.handler';
import { GetStoriesHandler } from './queries/handlers/get-stories.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';


@Module({
    imports: [CqrsModule],
    providers: [
        ApiAdminConsoleServiceFeature,
        UpdateBlogArchivedHandler,
        AddPermissionHandler,
        AddRoleHandler,
        CreateUserHandler,
        EditUserHandlers,
        RemovePermissionHandler,
        RemoveRoleHandler,
        SuspendUserHandler,
        UnsuspendUserHandler,
        GetBlogsHandler,
        GetUsersHandler,
        GetPermissionsHandler,
        GetRolesHandler,
        GetStoriesHandler
    ],
    exports: []
})
export class ApiAdminConsoleServiceFeatureModule {}
