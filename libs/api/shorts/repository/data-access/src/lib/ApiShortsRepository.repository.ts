import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { User } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Short } from '@graduates/api/shorts/api/shared/entities/data-access';
@Injectable()
export class ShortsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.short.findMany();
  }

  async findById(id: string) {
    return this.prisma.story.findUnique({ where: { id: id } });
  }

  // async createShort(
  //   userId: string,
  //   datePosted: Date,
  //   archived: boolean,
  //   user: User,
  //   media: string,
  //   data: string
  // ) {
  //   return this.prisma.story.create({
  //     data: {
  //       id: userId,
  //       datePosted: datePosted,
  //       archived: archived,
  //       user: { connect: { id: user.id } },
  //       media: media,
  //       data: data,
  //     },
  //   });
  // }

  // async createShort(short: Short) {
  //   return this.prisma.story.create({
  //     data: {
  //       id: short.userId,
  //       datePosted: short.datePosted,
  //       archived: short.archived,
  //       user: { connect: { id: short.user.id } },
  //       media: short.media,
  //       data: short.data,
  //     },
  //   });
  // }
}
