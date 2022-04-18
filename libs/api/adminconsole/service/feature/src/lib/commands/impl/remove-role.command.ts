import { Prisma } from "@prisma/client";

export class RemoveRoleCommand {
    constructor(public readonly userID:string, public readonly permission: Prisma.UserRoleWhereUniqueInput) { }
}
