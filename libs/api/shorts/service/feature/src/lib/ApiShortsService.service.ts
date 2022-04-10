<<<<<<< HEAD
import { QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { GetAllShortsQuery } from './queries/ApiShortsFetchAllQuery.query';
=======
>>>>>>> e1e6e938374a1c07b6591fd84ab678bb1da472d2
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllShortsQuery } from './queries/impl/ApiShortsFetchAllQuery.query';

@Injectable()
export class ShortsService {
  constructor(private readonly queryBus: QueryBus) {}

  async findAllShorts(): Promise<Short[]> {
    return this.queryBus.execute(new GetAllShortsQuery());
  }
}
