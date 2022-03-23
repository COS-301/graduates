import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllShortsQuery } from '../ApiShortsFetchAllQuery.query';
import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';

@QueryHandler(GetAllShortsQuery)
export class GetAllShortsHandler implements IQueryHandler<GetAllShortsQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetAllShortsQuery) {
    return this.repository.findAll();
  }
}
