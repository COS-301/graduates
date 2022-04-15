import {PrismaClient } from '@prisma/client';

export class CompanyExploreRepository{

prisma = new PrismaClient()

// Function used when searching for the name of a company
   async  getSearchResults(nameOfCompany: string){
      const allUsers = await this.prisma.user.findMany({
        where: {
          name: {
            contains: nameOfCompany
          }
       },
       include: {UserProfile: true }
      });
    //  console.dir(allUsers, { depth: null })
      return allUsers;
    }

// Function used to display a list of companies on the default page (Most recent companies first)
   async  getDefaultCompany(){
    const allUsers = await this.prisma.user.findMany({
      orderBy: [
        {
          created: 'desc',
        },
      ],
     include: {UserProfile: true }
    });
   // console.dir(allUsers, { depth: null })
    return allUsers;
  }


// Function used to display companies based on their tags
   async  getTaggedCompany(inputTag : string){
    const allUsers = await this.prisma.userTag.findMany({
     where: {
       tag : inputTag
    },
     include: {user: true }
    });
    //console.dir(allUsers, { depth: null })
    return allUsers;
  }
}

