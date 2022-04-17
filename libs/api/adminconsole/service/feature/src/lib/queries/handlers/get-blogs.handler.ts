import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Blog } from "@prisma/client";
import { GetBlogsQuery } from "../impl/get-blogs.query";

@QueryHandler(GetBlogsQuery)
export class GetBlogsHandler implements IQueryHandler<GetBlogsQuery> {
    constructor(private readonly repo: PrismaService) {}

    async execute(query: GetBlogsQuery): Promise<Blog[] | null> {
        const where = query.where;
        return await this.repo.blog.findMany({where});
    }
}
