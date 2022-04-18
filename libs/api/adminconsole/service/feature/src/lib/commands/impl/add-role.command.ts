import { Prisma, User } from "@prisma/client";

export class AddRoleCommand {
    constructor(public readonly users: User, public readonly data: Prisma.UserRoleUncheckedCreateInput) {}
}
