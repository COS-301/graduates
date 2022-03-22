import { QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { GetAllShortsQuery } from '@graduates/api/shorts/service/feature';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';

@Injectable()
export class ShortsService {
  constructor(private readonly queryBus: QueryBus) {}

  async findAllShorts(): Promise<Short[]> {
    return this.queryBus.execute(new GetAllShortsQuery());
  }
}
