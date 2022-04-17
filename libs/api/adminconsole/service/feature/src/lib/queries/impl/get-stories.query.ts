import { Prisma } from "@prisma/client";

export class GetStoriesQuery {
    constructor(
        public readonly where: Prisma.ShortWhereInput
    ) {}
}
