import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Short, User } from '@prisma/client';
import {
  GetAllShortsQuery,
  GetShortByIdQuery,
  GetShortByTagQuery,
  GetShortByUserQuery,
  GetUserByIdQuery,
} from './api-shorts-query.query';

/**
 * Class to handle the fetchAllShorts query for the ShortsService
 * @return {Promise<Short[]>}
 */
@QueryHandler(GetAllShortsQuery)
export class GetAllShortsHandler implements IQueryHandler<GetAllShortsQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(): Promise<Short[]> {
    return this.repository.findAll();
  }
}

/**
 * Class to implement the fetchTagById query for the ShortsService
 * @param {GetTagByIdQuery} query The query containing the id to search by
 * @return {Promise<ShortTag[]>}
 */
@QueryHandler(GetShortByIdQuery)
export class GetShortByIdHandler implements IQueryHandler<GetShortByIdQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetShortByIdQuery): Promise<Short | null> {
    const { id } = query;
    return this.repository.findById(id);
  }
}

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetUserByIdQuery): Promise<User | null> {
    const { id } = query;
    return this.repository.findUserById(id);
  }
}

/**
 * Class to implement the fetchShortByUser query for the ShortsService
 * @param {GetShortByUserQuery} query The query containing the user id to search by
 * @return {Promise<Short[]>}
 */
@QueryHandler(GetShortByUserQuery)
export class GetShortByUserHandler
  implements IQueryHandler<GetShortByUserQuery>
{
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetShortByUserQuery): Promise<Short[]> {
    const { userId } = query;
    return this.repository.findByUser(userId);
  }
}

/**
 * Class to implement the fetchShortByTag query for the ShortsService
 * @param {GetShortByTagQuery} query The query containing the tag id to search by
 * @return {Promise<Short[]>}
 */
@QueryHandler(GetShortByTagQuery)
export class GetShortByTagHandler implements IQueryHandler<GetShortByTagQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetShortByTagQuery): Promise<Short[]> {
    const { tagId } = query;
    return this.repository.findByTag(tagId);
  }
}
