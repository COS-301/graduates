import { Test, TestingModule } from '@nestjs/testing';
import { CompanyExploreResolver } from './company-explore.resolver';

describe('CompanyExploreResolver', () => {
  let resolver: CompanyExploreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyExploreResolver],
    }).compile();

    resolver = module.get<CompanyExploreResolver>(CompanyExploreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
