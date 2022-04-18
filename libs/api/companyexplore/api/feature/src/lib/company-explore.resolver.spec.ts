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

  it(': Testing getDefaultCompany',async () => {
    const result = await resolver.GetListOfComapnies();
    console.log(result);
    expect(result);
  });

  it(': Testing getCompanyByID', async () => {
    const result = await resolver.getCompanyById("123456789");
    //console.log(result);
    expect(result);
  });

  it(': Testing getSearchResults', async () => {
    const result = await resolver.GetCompanySearchResult("null3");
    //console.log(result);
    expect(result);
  });

  it(': Testing getTaggedCompany', async () => {
    const result = await resolver.GetCompanyTagged("nice");
    //console.log(result);
    expect(result);
  });
});
