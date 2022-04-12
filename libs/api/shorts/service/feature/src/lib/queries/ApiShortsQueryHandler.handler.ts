import { ShortsRepository } from '@graduates/api/shorts/repository/data-access';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllShortsQuery, GetShortByIdQuery, GetShortByTagQuery, GetShortByUserQuery } from './ApiShortsQuery.query';

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

@QueryHandler(GetShortByUserQuery)
export class GetShortByUserHandler implements IQueryHandler<GetShortByUserQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetShortByUserQuery) {
    const { userId } = query;
    return this.repository.findByUser(userId);
  }
}

@QueryHandler(GetShortByTagQuery)
export class GetShortByTagHandler implements IQueryHandler<GetShortByTagQuery> {
  constructor(private readonly repository: ShortsRepository) {}

  async execute(query: GetShortByTagQuery) {
    const { tagId } = query;
    return this.repository.findByTag(tagId);
  }
}
