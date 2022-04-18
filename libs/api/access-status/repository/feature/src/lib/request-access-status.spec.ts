import {AccessStatusRepository} from '../lib/request-access-status.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import {Requested} from '@prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import {request_access} from '../lib/request-access-status.entity';
const RequstedMock: jest.Mocked<Requested> = new request_access();
describe('ApiRequestAccessRepository', () => {
    let data:AccessStatusRepository;
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [AccessStatusRepository],
        providers: [PrismaService],
      }).compile();
      data = module.get<AccessStatusRepository>(AccessStatusRepository);
    });
    it('should add a request and return added request', async () => {
      jest
        .spyOn(data, 'findRequestByStudIdCompId')
        .mockImplementation(
          (): Promise<Requested[] | null> =>
            Promise.resolve([RequstedMock])
        );
  
      expect(
        await data.findRequestByStudIdCompId("1322","1322")
      ).toStrictEqual([RequstedMock]);
    });
   
  });