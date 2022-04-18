import { Prisma } from "@prisma/client";

export class GetUsersQuery {
    constructor(
        public readonly where: Prisma.UserPermissionsWhereInput
    ) {}
}
