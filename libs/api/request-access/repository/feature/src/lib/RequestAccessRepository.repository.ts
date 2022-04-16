import { Injectable } from '@nestjs/common';
import { Requested, Prisma ,FileCategory } from '@prisma/client';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class RequestAccessRepository {
  constructor(private prismaService: PrismaService ) {}

  async insertRequest(studId:string,compId:string,item:string,accepted:boolean): Promise<Requested> {
    return await this.prismaService.requested.create({
      data:
       { 
        StudId: studId,
        CompID: compId,
        Item : item,
        Accepted: accepted
      }
    });
  }
  
  //update the Accepted where userId and compId match the record
  async updateRequest(studId:string,compId:string,accepted:boolean): Promise<Requested> {
    return await this.prismaService.requested.update({
      where: {
        StudId: studId,
        CompID: compId,
      },
      data: {
        Accepted: accepted
      }
    });
  }

  // find request using requestId
  async findRequest(requestId:string): Promise<Requested> {
    return await this.prismaService.requested.findUnique({
      where: {
        RequestID: requestId
      }
    });
  }
  
  // find request using studId and compId
  async findRequestByStudIdCompId(studId:string,compId:string): Promise<Requested> {
    return await this.prismaService.requested.findUnique({
      where: {
        StudId: studId,
        CompID: compId
      }
    });
  }
}
