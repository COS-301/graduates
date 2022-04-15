import { Test, TestingModule } from '@nestjs/testing';
import { RequestAccessService } from './request-access.service';
import { CqrsModule } from '@nestjs/cqrs';

describe('RequestAccessService', () => {
  let service: RequestAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [RequestAccessService],
    }).compile();

    service = module.get<RequestAccessService>(RequestAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be not be null', async () => {
    const call = await service.getAccessEntity("u12345678","42","5");
    expect(call).not.toBeNull();
  });

  it('should be equal to entity', async () => {
    const call = await service.getAccessEntity("u12345678","42","5");
    expect(call).toEqual({"companyID": "u12345678", "userID": "42", "item": "5"});
  });  

});
