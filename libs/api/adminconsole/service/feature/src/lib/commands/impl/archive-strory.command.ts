import { Prisma } from "@prisma/client";

export class ArchiveStroryCommand {
    constructor(
        public readonly arg: {
            where:  Prisma.ShortWhereUniqueInput,
            data: Prisma.ShortUpdateInput
        }
    ) {}
}
 