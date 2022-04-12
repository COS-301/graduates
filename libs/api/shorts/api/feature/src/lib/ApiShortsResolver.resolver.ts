import {
  Resolver,
  Query,
  Args,
  Mutation,
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
  async findAllShorts(): Promise<Short[]> {
    return await this.service.findAllShorts();
  }

  @Query(() => Short)
  async findShortById(@Args('id') id: string): Promise<Short> {
    const res = await this.service.findShortById(id);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return res;
  }

  @Query(() => [Short])
  async findShortsByUser(@Args('userId') userId: string): Promise<Short[]> {
    return await this.service.findShortsByUser(userId);
  }

  @Query(() => [Short])
  async findShortsByTag(@Args('tagId') tagId: string): Promise<Short[]> {
    return await this.service.findShortsByTag(tagId);
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
