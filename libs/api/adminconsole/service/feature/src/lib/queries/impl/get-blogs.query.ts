import { Prisma } from "@prisma/client";

export class GetBlogsQuery {
    constructor(
       public readonly where: Prisma.BlogWhereInput
    ) {}
}
