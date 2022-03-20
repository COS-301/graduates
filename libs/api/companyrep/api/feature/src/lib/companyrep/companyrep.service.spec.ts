import { Test, TestingModule } from '@nestjs/testing';
import { CompanyrepService } from './companyrep.service';

describe('CompanyrepService', () => {
  let service: CompanyrepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyrepService],
    }).compile();

    service = module.get<CompanyrepService>(CompanyrepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
