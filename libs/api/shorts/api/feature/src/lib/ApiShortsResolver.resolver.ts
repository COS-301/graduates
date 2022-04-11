import {
  Resolver,
  Query,
  Args,
  Mutation,
  InputType,
  Field,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import {
  Short,
  ShortCreateInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { NotFoundException } from '@nestjs/common';

@Resolver(Short)
export class ShortsResolver {
  constructor(private readonly service: ShortsService) {}

  @ResolveField()
  user(@Root() short: Short): Promise<Short> {
    return this.service.findShortById(short.id);
  }

  @Query(() => [Short])
  findAllShorts(): Promise<Short[]> {
    return this.service.findAllShorts();
  }

  @Query(() => Short)
  async findShortById(@Args('id') id: string): Promise<Short> {
    const res = await this.service.findShortById(id);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return res;
  }

  @Mutation(() => Short)
  async createShort(
    @Args('short') short: ShortCreateInput,
    @Args('userId') userId: string
  ): Promise<Short> {
    const resp = await this.service.createShort(short, userId);
    return resp;
  }
}
