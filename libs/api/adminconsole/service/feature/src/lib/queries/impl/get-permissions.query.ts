import { Prisma } from "@prisma/client";

export class GetPermissionsQuery {
    constructor(
        public readonly where: Prisma.UserPermissionsWhereInput
    ) {}
}
