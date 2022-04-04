import { Test, TestingModule } from '@nestjs/testing';
import { AccessStatusService } from './access-status.service';

describe('AccessStatusService', () => {
  let service: AccessStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessStatusService],
    }).compile();

    service = module.get<AccessStatusService>(AccessStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
