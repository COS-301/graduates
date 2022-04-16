import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyExploreResolver } from './company-explore.resolver';
import { CompanyExploreService } from '@graduates/api/companyexplore/service/feature';
import { CqrsModule } from '@nestjs/cqrs';

describe('ApiCompanyExploreResolver', () => {
  let resolver: ApiCompanyExploreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [ApiCompanyExploreResolver, CompanyExploreService],
    }).compile();

    resolver = module.get<ApiCompanyExploreResolver>(ApiCompanyExploreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
