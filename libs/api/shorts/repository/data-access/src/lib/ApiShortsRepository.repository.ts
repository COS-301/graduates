import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { ShortCreateInput } from '@graduates/api/shorts/api/shared/entities/data-access';

@Injectable()
export class ShortsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.short.findMany();
  }

  async findById(id: string) {
    return this.prisma.short.findUnique({ where: { id: id } });
  }

  async findByUser(userId: string) {return null;}

  async findByTag(tagId: string) {return null;}

  async createShort(short: ShortCreateInput, userId: string) {
    return this.prisma.short.create({
      data: {
        media: short.media,
        data: short.data,
        archived: short.archived,
        user: {
          connect: { id: userId },
        },
        datePosted: new Date(),
      },
    });
  }
}
