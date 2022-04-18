import { Prisma } from "@prisma/client";

export class RemovePermissionCommand {
    constructor(
        public readonly userID:string, public readonly where: Prisma.UserPermissionsWhereUniqueInput
        ) {}
}
