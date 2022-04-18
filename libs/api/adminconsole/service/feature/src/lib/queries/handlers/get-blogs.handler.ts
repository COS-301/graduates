import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Blog } from "@prisma/client";
import { GetBlogsQuery } from "../impl/get-blogs.query";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BlogRepository } from '../../../../../../../blog/repository/data-access/src'

@QueryHandler(GetBlogsQuery)
export class GetBlogsHandler implements IQueryHandler<GetBlogsQuery> {
    constructor(private readonly repo: BlogRepository) {}

    async execute(query: GetBlogsQuery): Promise<Blog[] | null> {
        return await this.repo.findByUserId(query.userId);
    }
}
