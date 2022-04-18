import { Prisma } from "@prisma/client";

export class UnarchiveStroryCommand {
    constructor(
        public readonly arg: {
            where:  Prisma.ShortWhereUniqueInput,
            data: Prisma.ShortUpdateInput
        }
    ) {}
}
 