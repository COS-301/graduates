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
  ShortCreateTagInput,
  ShortTag,
  ShortUpdateInput,
  ShortReport,
  ShortReportInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortsService } from '@graduates/api/shorts/service/feature';
import { NotFoundException } from '@nestjs/common';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';

@Resolver(Short)
export class ShortsResolver {
  constructor(private readonly service: ShortsService) {}

  @ResolveField()
  user(@Root() short: Short): Promise<User> {
    return this.service.findUserById(short.userId);
  }

  @ResolveField(() => [ShortTag])
  async shortTag(@Root() short: Short): Promise<ShortTag[]> {
    return await this.service.findTagsByShortId(short.id);
  }

  /**
   * Query to find all shorts
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async getAllShorts(): Promise<Short[]> {
    return await this.service.findAllShorts();
  }

  /**
   * Query to find a short by id
   * @param {string} id The id of the short to find
   * @returns {Promise<Short | null>}
   */
  @Query(() => Short)
  async getShortById(@Args('id') id: string): Promise<Short | null> {
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
  async getShortsByUser(@Args('userId') userId: string): Promise<Short[]> {
    const res = await this.service.findShortsByUser(userId);
    if (!res) {
      throw new NotFoundException('User not found');
    }
    return res;
  }

  /**
   * Query to find shorts by tag id
   * @param {string} tagId The id of the tag to find the shorts for
   * @returns {Promise<Short[]>}
   */
  @Query(() => [Short])
  async getShortsByTag(@Args('tagId') tagId: string): Promise<Short[]> {
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
    @Args('userId') userId: string
  ): Promise<Short | null> {
    const res = await this.service.createShort(short, userId);
    return res;
  }

  /**
   * Mutation to delete a short
   * @param {string} id The id of the short to delete
   * @returns {Promise<Short | null>}
   */
  @Mutation(() => Short)
  async deleteShort(@Args('id') id: string): Promise<Short | null> {
    const res = await this.service.deleteShort(id);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return res;
  }

  @Mutation(() => Short)
  async updateShort(
    @Args('short') short: ShortUpdateInput
  ): Promise<Short | null> {
    const res = await this.service.updateShort(short);
    if (!res) {
      throw new NotFoundException('Short not found');
    }
    return await this.service.updateShort(short);
  }

  @Query(() => [ShortTag])
  async getAllTags(): Promise<ShortTag[]> {
    return await this.service.findAllTags();
  }

  @Query(() => [ShortTag])
  async getTagsByShortId(@Args('id') id: string): Promise<ShortTag[]> {
    return await this.service.findTagsByShortId(id);
  }

  @Mutation(() => ShortTag)
  async createTag(@Args('tag') tag: ShortCreateTagInput): Promise<ShortTag> {
    return await this.service.createTag(tag);
  }

  @Mutation(() => String)
  async updateTags(
    @Args('tag') tag: string,
    @Args('newTag') newTag: string
  ): Promise<string> {
    return await this.service.updateTags(tag, newTag);
  }

  @Mutation(() => String)
  async updateTagByShortId(
    @Args('shortId') shortId: string,
    @Args('tag') tag: string,
    @Args('newTag') newTag: string
  ): Promise<string> {
    return await this.service.updateTagByShortId(shortId, tag, newTag);
  }

  @Mutation(() => String)
  async deleteTagsByTag(@Args('tag') tag: string): Promise<string> {
    return await this.service.deleteTags(tag);
  }

  @Mutation(() => String)
  async deleteAllTagsForShort(
    @Args('shortId') shortId: string
  ): Promise<string> {
    return await this.service.deleteTagsByShortId(shortId);
  }

  @Mutation(() => String)
  async deleteTag(
    @Args('shortId') shortId: string,
    @Args('tag') tag: string
  ): Promise<string> {
    return await this.service.deleteTagByShortTag(shortId, tag);
  }

  @Query(() => [ShortReport])
  async getAllReports(): Promise<ShortReport[]> {
    return await this.service.getAllReports();
  }

  @Query(() => [ShortReport])
  async getReportsByUser(
    @Args('userId') userId: string
  ): Promise<ShortReport[]> {
    return await this.service.getReportsByUser(userId);
  }

  @Query(() => [ShortReport])
  async getReportsForShort(
    @Args('shortId') shortId: string
  ): Promise<ShortReport[]> {
    return await this.service.getReportsForShort(shortId);
  }

  @Query(() => ShortReport)
  async getReport(
    @Args('shortId') shortId: string,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.getReport(shortId, userId);
  }

  @Mutation(() => ShortReport)
  async reportShort(
    @Args('report') report: ShortReportInput,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.reportShort(report, userId);
  }

  @Mutation(() => ShortReport)
  async deleteReport(
    @Args('shortId') shortId: string,
    @Args('userId') userId: string
  ): Promise<ShortReport> {
    return await this.service.deleteReport(shortId, userId);
  }
}
