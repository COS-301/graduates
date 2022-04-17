import { Test, TestingModule } from '@nestjs/testing';
import { RequestAccessService } from './request-access.service';
import { CqrsModule } from '@nestjs/cqrs';
import { RequestAccessRepository } from '@graduates/api-request-access-repository-feature';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';

describe('RequestAccessService', () => {
  let service: RequestAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [RequestAccessService, RequestAccessRepository, PrismaService],
    }).compile();

    service = module.get<RequestAccessService>(RequestAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
/*
  it('should be not be null', async () => {
    const call = await service.getAccessEntity("u12345678","42","CV");
    expect(call).not.toBeNull();
  });

  it('should be not be undefined', async () => {
    const call = await service.getAccessEntity("u12345678","42","CV");
    expect(call).not.toBeUndefined();
  });

  it('should be equal to entity', async () => {
    const call = await service.getAccessEntity("u12345678","42","CV");
    expect(call).toEqual({"companyID": "u12345678", "userID": "42", "item": "CV"});
  });  
*/
});
