import { Injectable } from '@nestjs/common';
import { UserProfileFile, Prisma ,FileCategory } from '@prisma/client';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class StorageRepository {
  constructor(
    private prismaService: PrismaService
  ) {}

  async getUserFiles(u_id: Prisma.UserProfileFileWhereInput): Promise<UserProfileFile[] | null> {
    return this.prismaService.userProfileFile.findMany({
      where: u_id,
    });
  }

  async getUserDegree(u_id: string): Promise<UserProfileFile[] | null> {
    return this.prismaService.userProfileFile.findMany({
      where: {
          userId: u_id,
          fileCategory: FileCategory.MISC
      }
    });
  }

  

}
