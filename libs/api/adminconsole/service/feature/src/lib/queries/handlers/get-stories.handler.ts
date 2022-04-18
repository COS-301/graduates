import { PrismaService } from "@graduates/api/shared/services/prisma/data-access";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Short } from "@prisma/client";
import { GetStoriesQuery } from "../impl/get-stories.query";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ShortsRepository} from '../../../../../../../shorts/repository/data-access/src/lib/api-shorts-repository.repository'

@QueryHandler(GetStoriesQuery)
export class GetStoriesHandler implements IQueryHandler<GetStoriesQuery> {
    constructor(private readonly repo :ShortsRepository) {}

    async execute(query: GetStoriesQuery): Promise<Short[] | null> {
        return await this.repo.findByUser(query.userID);
    }
}
