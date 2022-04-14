import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import {
  ShortCreateInput,
  ShortCreateTagInput,
  ShortReportInput,
  ShortUpdateInput,
} from '@graduates/api/shorts/api/shared/entities/data-access';
import { Short, ShortReport, ShortTag, User } from '@prisma/client';

@Injectable()
export class ShortsRepository {
  constructor(private prisma: PrismaService) {}

  async findUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

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
  async findAllShortsPaged(
    pageNum: number,
    numShorts: number
  ): Promise<Short[]> {
    return this.prisma.short.findMany({
      skip: pageNum * numShorts,
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
  }

  /**
   * Find all shorts by tag, with pagination
   * @param {string} tagId The id of the tag to find the shorts for
   * @param {number} pageNum The page number used to offset the query
   * @param {number} numShorts The number of shorts to return per page
   * @return {Promise<Short[]>}
   */
  async findByTagPaged(
    tagId: string,
    pageNum: number,
    numShorts: number
  ): Promise<Short[]> {
    return this.prisma.short.findMany({
      skip: pageNum * numShorts,
      take: numShorts,
      where: {
        shortTag: {
          some: {
            tag: tagId,
          },
        },
      },
    });
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
        description: short.description,
        link: short.link,
        thumbnail: short.thumbnail,
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
      where: { id: short.id },
      data: {
        description: short.description,
        link: short.link,
        thumbnail: short.thumbnail,
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

    await this.prisma.$transaction([
      deleteTags,
      deleteShortReport,
      deleteShort,
    ]);

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
   * @return {Promise<ShortTag>}
   */
  async updateTagByShort(
    shortId: string,
    tag: string,
    newTag: string
  ): Promise<ShortTag> {
    return await this.prisma.shortTag.update({
      where: {
        shortId_tag: {
          shortId: shortId,
          tag: tag,
        },
      },
      data: {
        tag: newTag,
      },
    });
  }

  /**
   * Delete tags
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
   * @return {Promise<ShortTag>}
   */
  async deleteTagByShortTag(shortId: string, tag: string): Promise<ShortTag> {
    return await this.prisma.shortTag.delete({
      where: {
        shortId_tag: {
          shortId: shortId,
          tag: tag,
        },
      },
    });
  }

  /**
   * Function to get all reports
   * @return {Promise<ShortReport[]>}
   */
  async getAllReports(): Promise<ShortReport[]> {
    return this.prisma.shortReport.findMany();
  }

  /**
   * Function to get a single report
   * @param {string} userId The user id of the report
   * @param {string} shortId The short id of the report
   * @returns {Promise<ShortReport>}
   */
  async getReport(
    userId: string,
    shortId: string
  ): Promise<ShortReport | null> {
    return this.prisma.shortReport.findUnique({
      where: {
        shortId_userId: {
          shortId: shortId,
          userId: userId,
        },
      },
    });
  }

  /**
   * Function to get reports by user id
   * @param {string} userId The id of the user to get reports of
   * @return {Promise<ShortReport[]>}
   */
  async getReportsByUser(userId: string): Promise<ShortReport[]> {
    return this.prisma.shortReport.findMany({
      where: {
        userId: userId,
      },
    });
  }

  /**
   * Function to get reports by short id
   * @param {string} shortId The id of the short to get reports of
   * @return {Promise<ShortReport[]>}
   */
  async getReportsForShort(shortId: string): Promise<ShortReport[]> {
    return this.prisma.shortReport.findMany({
      where: {
        shortId: shortId,
      },
    });
  }

  /**
   * Function to report a short
   * @param {ShortReportInput} report The report to create
   * @param {string} userId The id of the user reporting the short
   * @return {Promise<ShortReport>}
   */
  async reportShort(
    report: ShortReportInput,
    userId: string
  ): Promise<ShortReport | null> {
    const res = await this.prisma.shortReport.create({
      data: {
        userId: userId,
        shortId: report.shortId,
        reason: report.reason,
      },
    });

    return res;
  }

  /**
   * Function to delete a specific report
   * @param {string} shortId The id of the report to delete
   * @param {string} userId The id of the user deleting the report
   * @return {Promise<ShortReport>}
   */
  async deleteReport(shortId: string, userId: string): Promise<ShortReport> {
    const res = await this.prisma.shortReport.delete({
      where: {
        shortId_userId: {
          shortId: shortId,
          userId: userId,
        },
      },
    });

    return res;
  }
}
