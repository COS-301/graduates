import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import {
  GetTagsByShortIdQuery,
  GetAllTagsQuery,
} from './queries/api-short-tag-query.query';
import {
  CreateTagCommand,
  UpdateTagsCommand,
  UpdateTagByShortCommand,
  DeleteTagsCommand,
  DeleteTagsByShortCommand,
  DeleteTagByShortTagCommand,
} from './commands/api-short-tag-command.command';
import {
  ShortCreateTagInput,
  ShortTag,
} from '@graduates/api/shorts/api/shared/entities/data-access';

@Injectable()
export class ShortsTagsService {
  /**
   * Constructor - injects QueryBus and CommandBus
   * @param {QueryBus} queryBus The query bus
   * @param {CommandBus} commandBus The command bus
   */
  constructor(
    private readonly queryBus: QueryBus,
    private commandBus: CommandBus
  ) {}

  /**
   * Find all tags
   * @return {Promise<ShortTag[]>}
   */
  async findAllTags(): Promise<ShortTag[]> {
    return await this.queryBus.execute(new GetAllTagsQuery());
  }

  /**
   * Find tags by short id
   * @param {string} id The id of the short to find the tags by
   * @return {Promise<ShortTag[]>}
   */
  async findTagsByShortId(id: string): Promise<ShortTag[]> {
    return await this.queryBus.execute(new GetTagsByShortIdQuery(id));
  }

  /**
   * Create a new tag
   * @param {ShortCreateTagInput} tag The tag to create
   * @return {Promise<ShortTag | null>}
   */
  async createTag(tag: ShortCreateTagInput): Promise<ShortTag | null> {
    return await this.commandBus.execute(new CreateTagCommand(tag));
  }

  /**
   * Update a tag
   * @param {string} tag The current text content of the tag
   * @param {string} newTag The new text content of the tag
   * @return {Promise<string>}
   */
  async updateTags(tag: string, newTag: string): Promise<string> {
    return await this.commandBus.execute(new UpdateTagsCommand(tag, newTag));
  }

  /**
   * Update a tag by the short id
   * @param {string} shortId The cid of the short
   * @param {string} tag The current text content of the tag
   * @param {string} newTag The new text content of the tag
   * @return {Promise<string>}
   */
  async updateTagByShortId(
    shortId: string,
    tag: string,
    newTag: string
  ): Promise<ShortTag> {
    return await this.commandBus.execute(
      new UpdateTagByShortCommand(shortId, tag, newTag)
    );
  }

  /**
   * Delete tags by text content
   * @param {string} tag The text content of the tag
   * @return {Promise<string>}
   */
  async deleteTags(tag: string): Promise<string> {
    return await this.commandBus.execute(new DeleteTagsCommand(tag));
  }

  /**
   * Delete all tags for a short
   * @param {string} shortId The short id
   * @return {Promise<string>}
   */
  async deleteTagsByShortId(shortId: string): Promise<string> {
    return await this.commandBus.execute(new DeleteTagsByShortCommand(shortId));
  }

  /**
   * Delete a certain tag
   * @param {string} shortId The short id
   * @param {string} tag The text content of the tag
   * @return {Promise<string>}
   */
  async deleteTagByShortTag(shortId: string, tag: string): Promise<ShortTag> {
    return await this.commandBus.execute(
      new DeleteTagByShortTagCommand(shortId, tag)
    );
  }
}
