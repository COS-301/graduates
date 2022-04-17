import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Short } from "@prisma/client";
import { GetStoriesQuery } from "../impl/get-stories.query";

@QueryHandler(GetStoriesQuery)
export class GetStoriesHandler implements IQueryHandler<GetStoriesQuery> {
    constructor(private readonly repo: PrismaService) {}

    async execute(query: GetStoriesQuery): Promise<Short[] | null> {
        const where = query.where;
        return await this.repo.short.findMany({where});
    }
}
