import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ShortCreateInput } from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortUpdateInput } from '@graduates/api/shorts/api/shared/entities/data-access';
import { ShortCreateTagInput } from '@graduates/api/shorts/api/shared/entities/data-access';
import { Short, ShortTag } from '@prisma/client';

@Injectable()
export class ShortsRepository {
  constructor(private prisma: PrismaService) {}

  /**
   * Find all shorts from database
   * @return {Promise<Short[]>}
   */
  async findAll(): Promise<Short[]> {
    return this.prisma.short.findMany();
  }

  /**
   * Find all shorts from database, with pagination
   * @param {number} pageNum The page number used to offset the query
   * @param {number} numShorts The number of shorts to return per page
   * @return {Promise<Short[]>}
   */
     async findAllShortsPaged(pageNum: number, numShorts: number): Promise<Short[]> {
      return this.prisma.short.findMany({
        skip: pageNum*numShorts,
        take: numShorts,
      });
    }

  /**
   * Find a short by id
   * @param {string} id The id of the short to find
   * @return {Promise<Short | null>}
   */
  async findById(id: string): Promise<Short | null> {
    return this.prisma.short.findUnique({ where: { id: id } });
  }

  /**
   * Find all shorts by user id
   * @param {string} userId The id of the user to find the shorts for
   * @return {Promise<Short[]>}
   */
  async findByUser(userId: string): Promise<Short[]> {
    return this.prisma.short.findMany({
      where: {
        user: { id: userId },
      },
    });
    return [];
  }

  /**
   * Find all shorts by tag
   * @param {string} tagId The id of the tag to find the shorts for
   * @return {Promise<Short[]>}
   */
  async findByTag(tagId: string): Promise<Short[]> {
    return this.prisma.short.findMany({
      where: {
        shortTag: {
          some: {
            tag: tagId,
          },
        },
      },
    });
    return [];
  }

  /**
   * Find all shorts by tag, with pagination
   * @param {string} tagId The id of the tag to find the shorts for
   * @param {number} pageNum The page number used to offset the query
   * @param {number} numShorts The number of shorts to return per page
   * @return {Promise<Short[]>}
   */
   async findByTagPaged(tagId: string, pageNum: number, numShorts: number): Promise<Short[]> {
    return this.prisma.short.findMany({
      skip: pageNum*numShorts,
      take: numShorts, 
      where: {
        shortTag: {
          some: {
            tag: tagId,
          },
        },
      },
    });
    return [];
  }

  /**
   * Create a new short
   * @param {Short} short The short to create
   * @param {string} userId The id of the user to create the short for
   * @return {Promise<Short | null>}
   */
  async createShort(short: ShortCreateInput, userId: string): Promise<Short> {
    return this.prisma.short.create({
      data: {
        media: short.media,
        data: short.data,
        archived: short.archived,
        user: {
          connect: { id: userId },
        },
        shortTag: {
          createMany: {
            data: short.shortTag,
          },
        },
        datePosted: new Date(),
      },
    });
  }

  /**
   * Update a short
   * @param {ShortUpdateInput} short The short to update along with updated data
   * @return {Promise<Short | null>}
   */
  async updateShort(short: ShortUpdateInput): Promise<Short | null> {
    return this.prisma.short.update({
      where: { id: short.id, },
      data: {
        media: short.media,
        data: short.data,
        archived: short.archived,
      },
    });
  }

  /**
   * Delete a short
   * @param {string} id The id of the short to delete
   * @return {Promise<Short | null>}
   */
  async deleteShort(id: string): Promise<Short | null> {
    const deleteTags = this.prisma.shortTag.deleteMany({
      where: {
        shortId: id,
      },
    });

    const deleteShort = this.prisma.short.delete({
      where: {
        id: id,
      },
    });

    const deleteShortReport = this.prisma.shortReport.deleteMany({
      where: {
        shortId: id,
      },
    });

    await this.prisma.$transaction([deleteTags, deleteShortReport, deleteShort]);

    return deleteShort;
  }

  /**
   * Find all short tags from database
   * @return {Promise<Short[]>}
   */
  async findAllTags(): Promise<ShortTag[]> {
    return this.prisma.shortTag.findMany();
  }

  /**
   * Find tags by id
   * @param {string} id The id of the short to find
   * @return {Promise<ShortTag[]>}
   */
   async findTagByShortId(id: string): Promise<ShortTag[]> {
    return this.prisma.shortTag.findMany({ where: { shortId: id } });
  }

  /**
   * Create a tag
   * @param {ShortCreateTagInput} tag The tag to create
   * @return {Promise<ShortTag>}
   */
  async createTag(tag: ShortCreateTagInput): Promise<ShortTag | null> {
    return this.prisma.shortTag.create({
      data: {
        tag: tag.tag,
        short: {
          connect: { id: tag.shortId },
        },
      },
    });
  }

  /**
   * Update tags to a new tag
   * @param {string} tag The tag to update
   * @param {string} newTag The updated tag
   * @return {Promise<string>}
   */
  async updateTags(tag: string, newTag: string): Promise<string> {
    const res = await this.prisma.shortTag.updateMany({
      where: {
        tag: tag,
      },
      data: {
        tag: newTag,
      },
    });

    if (res.count > 0) {
      return 'success';
    } else {
      return 'No tags updated';
    }
  }

  /**
   * Update the tag of a short to a new tag
   * @param {string} shortId The short to update
   * @param {string} tag The tag to update
   * @param {string} newTag The updated tag
   * @return {Promise<string>}
   */
  async updateTagByShort(
    shortId: string,
    tag: string,
    newTag: string
  ): Promise<string> {
    const res = await this.prisma.shortTag.updateMany({
      where: {
        AND: {
          shortId: shortId,
          tag: tag,
        },
      },
      data: {
        tag: newTag,
      },
    });

    if (res.count > 0) {
      return 'success';
    } else {
      return 'Tag not found';
    }
  }

  /**
   * Delete a tag
   * @param {string} tag The tag to delete
   * @return {Promise<string>}
   */
  async deleteTags(tag: string): Promise<string> {
    const res = await this.prisma.shortTag.deleteMany({
      where: {
        tag: tag,
      },
    });

    if (res.count > 0) {
      return 'success';
    } else {
      return 'No tags deleted';
    }
  }

  /**
   * Delete tags of a short
   * @param {string} shortId The short to delete tags of
   * @return {Promise<string>}
   */
  async deleteTagsByShortId(shortId: string): Promise<string> {
    const res = await this.prisma.shortTag.deleteMany({
      where: {
        shortId: shortId,
      },
    });

    if (res.count > 0) {
      return 'success';
    } else {
      return 'No tags deleted';
    }
  }

  /**
   * Delete specific tag of a short
   * @param {string} shortId The short to delete tags of
   * @param {string} tag The tag to delete
   * @return {Promise<string>}
   */
  async deleteTagByShortTag(shortId: string, tag: string): Promise<string> {
    const res = await this.prisma.shortTag.deleteMany({
      where: {
        AND: {
          shortId: shortId,
          tag: tag,
        },
      },
    });

    if (res.count > 0) {
      return 'success';
    } else {
      return 'Tag not found';
    }
  }
}