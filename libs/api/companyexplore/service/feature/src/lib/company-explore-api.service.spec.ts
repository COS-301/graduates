import { Test, TestingModule } from '@nestjs/testing';
import { CompanyExploreApiService } from './company-explore-api.service';

describe('CompanyExploreApiService', () => {
  let service: CompanyExploreApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyExploreApiService],
    }).compile();

    service = module.get<CompanyExploreApiService>(CompanyExploreApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
