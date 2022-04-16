import { Injectable } from '@nestjs/common';
import { Requested, Prisma ,Item } from '@prisma/client';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class RequestAccessRepository {
  constructor(private prismaService: PrismaService ) {}
}