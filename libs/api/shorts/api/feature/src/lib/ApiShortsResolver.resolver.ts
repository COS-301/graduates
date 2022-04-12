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

  /**
   * Query to find all shorts
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async findAllShorts(): Promise<Short[]> {
    return await this.service.findAllShorts();
  }

  /**
   * Query to find a short by id
   * @param {string} id The id of the short to find
   * @returns {Promise<Short | null>}
   */
  @Query(() => Short)
  async findShortById(@Args('id') id: string): Promise<Short | null> {
    const res = await this.service.findShortById(id);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return res;
  }

  /**
   * Query to find shorts by user id
   * @param {string} userId The id of the user to find the shorts for
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async findShortsByUser(@Args('userId') userId: string): Promise<Short[]> {
    return await this.service.findShortsByUser(userId);
  }

  /**
   * Query to find shorts by tag id
   * @param {string} tagId The id of the tag to find the shorts for
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async findShortsByTag(@Args('tagId') tagId: string): Promise<Short[]> {
    return await this.service.findShortsByTag(tagId);
  }

  /**
   * Mutation to create a short
   * @param {ShortCreateInput} short The short to create
   * @param {string} userId The id of the user to create the short for
   * @returns {Promise<Short | null>}
   */
  @Mutation(() => Short)
  async createShort(
    @Args('short') short: ShortCreateInput,
    @Args({ name: 'tags', type: () => [String] }) tags: string[],
    @Args('userId') userId: string
  ): Promise<Short | null> {
    const resp = await this.service.createShort(short, tags, userId);
    return resp;
  }
}
