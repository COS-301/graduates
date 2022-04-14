import {
  GetTagsByShortIdQuery,
  GetAllTagsQuery,
} from './api-short-tag-query.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ShortTag } from '@prisma/client';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';

/**
 * Class to implement the fetchTagByShortId query for the ShortsService
 * @param {GetAllTagsQuery} query The query containing the id to search by
 * @return {Promise<ShortTag[]>}
 */
@QueryHandler(GetAllTagsQuery)
export class GetAllTagsHandler implements IQueryHandler<GetAllTagsQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(): Promise<ShortTag[]> {
    return this.repository.findAllTags();
  }
}

/**
 * Class to implement the fetchTagByShortId query for the ShortsService
 * @param {GetTagsByShortIdQuery} query The query containing the id to search by
 * @return {Promise<ShortTag[]>}
 */
@QueryHandler(GetTagsByShortIdQuery)
export class GetTagsByShortIdHandler
  implements IQueryHandler<GetTagsByShortIdQuery>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetTagsByShortIdQuery): Promise<ShortTag[]> {
    const { id } = query;
    return this.repository.findTagByShortId(id);
  }
}
