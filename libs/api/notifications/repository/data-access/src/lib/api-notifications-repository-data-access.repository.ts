import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.notification.findMany();
  }
}
