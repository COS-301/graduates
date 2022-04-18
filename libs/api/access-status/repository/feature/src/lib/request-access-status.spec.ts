import {AccessStatusRepository} from './request-access-status.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { Test, TestingModule } from '@nestjs/testing';
describe('ApiRequestAccessRepository', () => {
    let data:AccessStatusRepository;
    // const prisma = new PrismaService();
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [AccessStatusRepository],
        providers: [PrismaService],
      }).compile();
      data = module.get<AccessStatusRepository>(AccessStatusRepository);
    //   await prisma.requested.create({data: {
    //       StudId: 'rtyuiodfgh',
    //       CompId: '3546wertyw',
    //       ItemId: 'TRANSCRIPT',
    //       Accepted: false
    //       }});
          
    //   await prisma.requested.create({data: {
    //       StudId: 'rtyuiodfgh',
    //       CompId: '3546wertyw',
    //       ItemId: 'ACADEMIC_RECORD',
    //       Accepted: false
    //       }});
          
    });
    it('generic test', async () => {
    //   const call1 = await data.insertRequest("1322","1322","CV",false);
      // const call2 = await data.findRequestByStudIdCompId("rtyuiodfgh","3546wertyw");
      //loop through call2
      // for (let i = 0; i < call2.length; i++) {
      //   console.log (call2[i]);
      //   expect(call2[i]).toBeDefined();
      // }
    //     expect(call1).toBeDefined();
    //     expect(call2).toBeDefined();
   });
  });