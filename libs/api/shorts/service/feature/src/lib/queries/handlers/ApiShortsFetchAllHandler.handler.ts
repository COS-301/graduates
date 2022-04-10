<<<<<<< HEAD
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllShortsQuery } from '../ApiShortsFetchAllQuery.query';
=======
>>>>>>> e1e6e938374a1c07b6591fd84ab678bb1da472d2
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
