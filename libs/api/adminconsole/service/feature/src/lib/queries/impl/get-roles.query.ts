import { Prisma } from "@prisma/client";

export class GetRolesQuery {
    constructor(
        public readonly where: Prisma.UserRoleWhereInput
    ) {}
}
