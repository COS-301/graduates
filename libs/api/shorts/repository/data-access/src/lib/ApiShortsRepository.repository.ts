import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
@Injectable()
export class ShortsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.short.findMany();
  }
}
