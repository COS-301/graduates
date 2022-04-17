import { Injectable } from '@nestjs/common';
import { Requested, Prisma ,Item } from '@prisma/client';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class RequestAccessRepository {
  constructor(private prismaService: PrismaService ) {}
  
  async insertRequest(studId:string,compId:string,item:Item,accepted:boolean): Promise<Requested> {
    return await this.prismaService.requested.create({
      data:
       { 
        StudId: studId,
        CompId: compId,
        ItemId: item,
        Accepted: accepted
      }
    });
  }

  //   find request using studId and compId
  async findRequestByStudIdCompId(studId:string,compId:string): Promise<Requested[]> {
    return await this.prismaService.requested.findMany({
      where: {
        StudId: studId,
        CompId: compId
      }
    });
  }
}
