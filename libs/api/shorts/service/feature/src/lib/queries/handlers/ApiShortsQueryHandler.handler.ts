import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  GetAllShortsQuery,
  GetShortByIdQuery,
} from '../impl/ApiShortsQuery.query';

@QueryHandler(GetAllShortsQuery)
export class GetAllShortsHandler implements IQueryHandler<GetAllShortsQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}

@QueryHandler(GetShortByIdQuery)
export class GetShortByIdHandler implements IQueryHandler<GetShortByIdQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetShortByIdQuery) {
    const { id } = query;
    return this.repository.findById(id);
  }
}
