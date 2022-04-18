import {RequestAccessRepository} from '../lib/RequestAccessRepository.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import {Requested} from '@prisma/client';
import { Test, TestingModule } from '@nestjs/testing';
import {request_access} from '../lib/request-access.entity';
const RequstedMock: jest.Mocked<Requested> = new request_access();
describe('ApiRequestAccessRepository', () => {
    let data:RequestAccessRepository;
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [RequestAccessRepository],
        providers: [PrismaService],
      }).compile();
      data = module.get<RequestAccessRepository>(RequestAccessRepository);
    });

    it('should add a request and return added request', async () => {
      jest
        .spyOn(data, 'insertRequest')
        .mockImplementation(
          (): Promise<Requested | null> =>
            Promise.resolve(RequstedMock)
        );
  
      expect(
        await data.insertRequest("1322","1322","CV",false)
      ).toStrictEqual(RequstedMock);
    });
   
  });