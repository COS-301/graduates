import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllShortsQuery } from '../impl/ApiShortsFetchAllQuery.query';

@QueryHandler(GetAllShortsQuery)
export class GetAllShortsHandler implements IQueryHandler<GetAllShortsQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
