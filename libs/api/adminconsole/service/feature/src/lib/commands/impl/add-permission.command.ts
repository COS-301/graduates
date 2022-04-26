import { Prisma, User } from "@prisma/client";

export class AddPermissionCommand {
    constructor(public readonly users: User, public readonly data: Prisma.UserPermissionsUncheckedCreateInput) { }
}
