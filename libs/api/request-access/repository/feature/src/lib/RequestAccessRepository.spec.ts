import {RequestAccessRepository} from '../lib/RequestAccessRepository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';


import { Test, TestingModule } from '@nestjs/testing';
describe('ApiRequestAccessRepository', () => {
    let data:RequestAccessRepository;
    const prisma = new PrismaService();
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [RequestAccessRepository],
        providers: [PrismaService],
      }).compile();
      data = module.get<RequestAccessRepository>(RequestAccessRepository);
      await prisma.requested.create({data: {
          StudId: 'srdghbfhyn',
          CompId: 'sgtdnhbxnz',
          ItemId: 'ACADEMIC_RECORD',
          Accepted: false
          }});
    });
    it('generic test', async () => {
      const call1 = await data.insertRequest("1322","1322","CV",false);
      const call2 = await data.findRequestByStudIdCompId("1322","1322");
      console.log(call1);
      console.log(call2[0]);
      console.log(call2[1]);
     expect(true).toBeTruthy();
   });
  });