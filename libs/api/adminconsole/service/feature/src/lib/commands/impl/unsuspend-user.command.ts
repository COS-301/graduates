import { Prisma } from "@prisma/client";

export class UnsuspendUserCommand {
    constructor(
        public readonly arg: {
            where: Prisma.UserWhereUniqueInput;
            data: Prisma.UserUpdateInput
        }
    ) {}
}
