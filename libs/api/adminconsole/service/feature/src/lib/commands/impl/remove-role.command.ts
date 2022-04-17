import { Prisma } from "@prisma/client";

export class RemoveRoleCommand {
    constructor(public readonly userID:string, public readonly permission: Prisma.UserRoleDeleteArgs) {
        permission.where.userId_role.userId = userID;
    }
}
