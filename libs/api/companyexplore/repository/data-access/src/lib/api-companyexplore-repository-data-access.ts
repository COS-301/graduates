import { Injectable } from '@nestjs/common';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Prisma, User, UserTag } from '@prisma/client';
import { ApiCompanyExploreEntity } from '@graduates/api/companyexplore/api/shared/interfaces/data-access';

@Injectable()
export class CompanyExploreRepository {
  constructor(private prisma: PrismaService) {}
  // Function used when searching with id of a company
  async getCompanyById(IdOfCompany: string) {
    const User = await this.prisma.user.findUnique({
      where: {
        id: IdOfCompany,
      },
      include: { UserProfile: true },
    });
    //  console.dir(allUsers, { depth: null })
    return User;
  }

  // Function used when searching for the name of a company
  async getSearchResults(nameOfCompany: string) {
    const allUsers = await this.prisma.user.findMany({
      where: {
        name: {
          contains: nameOfCompany,
        },
      },
      include: { UserProfile: true },
    });
    //  console.dir(allUsers, { depth: null })
    return allUsers;
  }

  // Function used to display a list of companies on the default page (Most recent companies first)
  async getDefaultCompany() {
    const allUsers = await this.prisma.user.findMany({
      orderBy: [
        {
          created: 'desc',
        },
      ],
      include: { UserProfile: true },
    });
    console.dir(allUsers, { depth: null });
    return allUsers;
  }

  // Function used to display companies based on their tags
  async getTaggedCompany(inputTag: string) {
    const allUsers = await this.prisma.userTag.findMany({
      where: {
        tag: inputTag,
      },
      include: { user: true },
    });
    //console.dir(allUsers, { depth: null })
    return allUsers;
  }
}



