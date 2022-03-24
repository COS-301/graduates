import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyExploreResolver } from './company-explore.resolver';
import { ApiCompanyExploreService } from '@graduates/api/companyexplore/service/feature';

describe('ApiCompanyExploreResolver', () => {
  let resolver: ApiCompanyExploreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCompanyExploreResolver, ApiCompanyExploreService],
    }).compile();

    resolver = module.get<ApiCompanyExploreResolver>(ApiCompanyExploreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
