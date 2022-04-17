import { Prisma } from "@prisma/client";

export class RemovePermissionCommand {
    constructor(public readonly userID:string, public readonly permission: Prisma.UserPermissionsDeleteArgs) {
        permission.where.userId_permissionType_permissionCategory_permissionTenant.userId = userID;
    }
}
