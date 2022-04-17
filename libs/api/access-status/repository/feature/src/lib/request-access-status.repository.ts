import { Injectable } from '@nestjs/common';
import { Requested} from '@prisma/client';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

@Injectable()
export class AccessStatusRepository {
  constructor(private prismaService: PrismaService ) {}
  
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
