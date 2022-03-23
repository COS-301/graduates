import { Resolver, Query } from '@nestjs/graphql';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsService } from '@graduates/api/shorts/service/feature';

@Resolver()
export class ShortsResolver {
  constructor(private readonly service: ShortsService) {}

  @Query(() => [Short])
  findAllShorts(): Promise<Short[]> {
    return this.service.findAllShorts();
  }
}
