import { Injectable } from '@nestjs/common';
//import { Blog, Prisma, Short, User, UserPermissions, UserRole } from '@prisma/client';
import { Blog } from '@graduates/api/blog/api/shared/entities/data-access';
import { User } from '@graduates/api/adminconsole/api/shared/data-access';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { user_permissions} from '@graduates/api/authorization/repository/shared';
import { role_permissions} from '@graduates/api/authorization/repository/shared';
import { Prisma } from '@prisma/client';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { GetUsersQuery } from './queries/impl/get-users.query';
import { EditUserCommand } from './commands/impl/edit-user.command';
import { GetPermissionsQuery } from './queries/impl/get-permissions.query';
import { GetBlogsQuery } from './queries/impl/get-blogs.query';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { UpdateBlogArchivedCommand } from 'libs/api/blog/service/feature/src/lib/commands/api-blog-command.command';
import { GetStoriesQuery } from './queries/impl/get-stories.query';
import { GetRolesQuery } from './queries/impl/get-roles.query';
import { SuspendUserCommand } from './commands/impl/suspend-user.command';
import { AddPermissionCommand } from './commands/impl/add-permission.command';
import { UnsuspendUserCommand } from './commands/impl/unsuspend-user.command';
import { RemovePermissionCommand } from './commands/impl/remove-permission.command';
import { AddRoleCommand } from './commands/impl/add-role.command';
import { RemoveRoleCommand } from './commands/impl/remove-role.command';
import { ArchiveStroryCommand } from './commands/impl/archive-strory.command';
import { UnarchiveStroryCommand } from './commands/impl/unarchive-strory.command';


@Injectable()
export class ApiAdminConsoleServiceFeature {
    constructor(
        private commandBus: CommandBus,
        private queryBus: QueryBus
    ) {}


    async createUser(user: Prisma.UserCreateInput): Promise< void > {
        return this.commandBus.execute(
            new CreateUserCommand(user)
        );
    }

    async getUsers(userID: string): Promise< User[] > {
        return this.queryBus.execute(new GetUsersQuery({
            userId:userID
        }));
    }

    async editUser(user: User): Promise<void> {
        return this.commandBus.execute(new EditUserCommand({
               where: {id: user.id},
                data: {
                    id: user.id,
                    email: user.email,
                    password: user.password,
                    passwordSalt: user.passwordSalt,
                    name: user.name,
                    dateOfBirth: user.dateOfBirth,
                    created: user.created,
                    suspended: user.suspended,
                    validated: user.validated 
                }
                }));
    }

    async addPermission(user: User, permission: Prisma.UserPermissionsUncheckedCreateInput): Promise<void> {
        return this.commandBus.execute(new AddPermissionCommand(user, permission));
    }

    async addRole(user: User, permission: Prisma.UserRoleUncheckedCreateInput): Promise<void> {
        return this.commandBus.execute(new AddRoleCommand(user, permission));
    }

    async removePermission(userID: string, permission: Prisma.UserPermissionsWhereUniqueInput): Promise<void> {
        return this.commandBus.execute(new RemovePermissionCommand(userID, permission));
    }

    async removeRole(userID: string, permission: Prisma.UserRoleWhereUniqueInput): Promise<void> {
        return this.commandBus.execute(new RemoveRoleCommand(userID, permission));
    }

    async suspendUser(userID: string): Promise<void> {
        return this.commandBus.execute(new SuspendUserCommand({
            where: {id: userID},
            data: {
                suspended: true
            }
        }));
    }

    async unSuspendUser(userID: string): Promise<void> {
        return this.commandBus.execute(new UnsuspendUserCommand({
            where: {id: userID},
            data: {suspended: false}
        }));
    }

    async archiveStory(stroryId: string): Promise<void> {
        return this.commandBus.execute(new ArchiveStroryCommand({
            where: {id: stroryId},
            data: {archived: true}
        }));
    } 

    async unArchiveStory(stroryId: string): Promise<void> {
        return this.commandBus.execute(new UnarchiveStroryCommand({
            where: {id: stroryId},
            data: {archived: false}
        }));
    } 

    async getPermissions(userID: string): Promise<user_permissions[]> {
        return this.queryBus.execute(new GetPermissionsQuery(userID));
    }

    async getStories(userID: string): Promise<Short[]> {
        return this.queryBus.execute(new GetStoriesQuery(userID));
    }

    async getRoles(userID: string): Promise<role_permissions[]> {
        return this.queryBus.execute(new GetRolesQuery(userID));
    }


    async getBlogs(userID: string): Promise<Blog[]> {
        return this.queryBus.execute(new GetBlogsQuery(userID));
    }

    async archiveBlog(blogId: string): Promise<void> {
        return this.commandBus.execute(new UpdateBlogArchivedCommand(blogId, true));
    }

    async unArchiveBlog(blogId: string): Promise<void> {
        return this.commandBus.execute(new UpdateBlogArchivedCommand(blogId, false));
    }
}
