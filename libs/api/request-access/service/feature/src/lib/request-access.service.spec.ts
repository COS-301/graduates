import { Test, TestingModule } from '@nestjs/testing';
import { RequestAccessService } from './request-access.service';

describe('RequestAccessService', () => {
  let service: RequestAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestAccessService],
    }).compile();

    service = module.get<RequestAccessService>(RequestAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
