import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  GetAllShortsQuery,
  GetShortByIdQuery,
} from './queries/impl/ApiShortsQuery.query';

@Injectable()
export class ShortsService {
  constructor(private readonly queryBus: QueryBus) {}

  async findAllShorts(): Promise<Short[]> {
    return this.queryBus.execute(new GetAllShortsQuery());
  }

  async findShortById(id: string): Promise<Short> {
    return this.queryBus.execute(new GetShortByIdQuery(id));
  }
}
