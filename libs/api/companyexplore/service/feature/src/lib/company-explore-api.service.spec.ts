import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyExploreService } from './company-explore-api.service';

describe('ApiCompanyExploreService', () => {
  let service: ApiCompanyExploreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCompanyExploreService],
    }).compile();

    service = module.get<ApiCompanyExploreService>(ApiCompanyExploreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
