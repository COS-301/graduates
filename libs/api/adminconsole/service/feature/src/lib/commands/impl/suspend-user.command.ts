import { Prisma } from "@prisma/client";

export class SuspendUserCommand {
    constructor(
        public readonly arg: {
            where: Prisma.UserWhereUniqueInput,
            data: Prisma.UserUpdateInput
        }
    ) {}
}
