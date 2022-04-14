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
});
