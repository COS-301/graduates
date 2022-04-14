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
  ShortCreateTagInput,
  ShortTag,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import {
  ShortsTagsService,
  ShortsService,
} from '@graduates/api/shorts/service/feature';

@Resolver(ShortTag)
export class ShortsTagsResolver {
  constructor(
    private readonly service: ShortsTagsService,
    private readonly shortsService: ShortsService
  ) {}

  /**
   * Field resolver for a short
   * @param {ShortTag} shortTag The short tag to resolve
   * @returns {Short} The short that was reported
   */
  @ResolveField()
  short(@Root() shortTag: ShortTag): Promise<Short> {
    return this.shortsService.findShortById(shortTag.shortId);
  }

  // CREATE //
  /**
   * Mutation to create a tag
   * @param {ShortCreateTagInput} tag The tag to create
   * @returns {Promise<ShortTag | null>}
   */
  @Mutation(() => ShortTag)
  async createTag(
    @Args('tag') tag: ShortCreateTagInput
  ): Promise<ShortTag | null> {
    return await this.service.createTag(tag);
  }

  // READ //
  /**
   * Query to get all tags
   * @returns {Promise<ShortTag[]>}
   */
  @Query(() => [ShortTag])
  async getAllTags(): Promise<ShortTag[]> {
    return await this.service.findAllTags();
  }

  /**
   * Query to get all tags for a short
   * @param {string} id The id of the short to find the tags for
   * @returns {Promise<ShortTag[]>}
   */
  @Query(() => [ShortTag])
  async getTagsByShortId(@Args('id') id: string): Promise<ShortTag[]> {
    return await this.service.findTagsByShortId(id);
  }

  // UPDATE //
  /**
   * Mutation to update tags
   * @param {string} tag The current text content of the tag
   * @param {string} newTag The new text content of the tag
   * @returns {Promise<string>}
   */
  @Mutation(() => String)
  async updateTags(
    @Args('tag') tag: string,
    @Args('newTag') newTag: string
  ): Promise<string> {
    return await this.service.updateTags(tag, newTag);
  }

  /**
   * Mutation to update a tag for a short
   * @param {string} shortId The id of the short to update the tag for
   * @param {string} tag The current text content of the tag
   * @param {string} newTag The new text content of the tag
   * @returns {Promise<ShortTag>}
   */
  @Mutation(() => ShortTag)
  async updateTagByShortId(
    @Args('shortId') shortId: string,
    @Args('tag') tag: string,
    @Args('newTag') newTag: string
  ): Promise<ShortTag> {
    return await this.service.updateTagByShortId(shortId, tag, newTag);
  }

  // DELETE //
  /**
   * Mutation to delete tags
   * @param {string} tag The current text content of the tag
   * @returns {Promise<string>}
   */
  @Mutation(() => String)
  async deleteTagsByTag(@Args('tag') tag: string): Promise<string> {
    return await this.service.deleteTags(tag);
  }

  /**
   * Mutation to delete all tags for a short
   * @param {string} shortId The id of the short to delete the tags for
   * @returns {Promise<string>}
   */
  @Mutation(() => String)
  async deleteAllTagsForShort(
    @Args('shortId') shortId: string
  ): Promise<string> {
    return await this.service.deleteTagsByShortId(shortId);
  }

  /**
   * Mutation to delete a single tag
   * @param {string} shortId The id of the short to delete the tags for
   * @param {string} tag The current text content of the tag
   * @returns {Promise<ShortTag>}
   */
  @Mutation(() => ShortTag)
  async deleteTag(
    @Args('shortId') shortId: string,
    @Args('tag') tag: string
  ): Promise<ShortTag> {
    return await this.service.deleteTagByShortTag(shortId, tag);
  }
}
