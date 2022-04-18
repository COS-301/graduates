import { Test, TestingModule } from '@nestjs/testing';
import { CompanyExploreService } from './api-company-explore-service';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { GetTaggedCompHandler } from './queries/handlers/get-companies-by-tag.handler';
import { GetDefaultCompHandler } from './queries/handlers/get-companies-default.handler';
import { GetSearchHandler } from './queries/handlers/get-companies-search.handler';
import { GetCompByIdHandler } from './queries/handlers/get-company-by-id.handler';
import { CompanyExploreRepository } from '@graduates/api/companyexplore/repository/data-access';
import { CompanyExploreServiceModule } from  './company-explore-service.module'

describe('CompanyExploreService', () => {
  let service: CompanyExploreService;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyExploreService,QueryBus]
    }).compile();

    await module.init();
    queryBus = module.get<QueryBus>(QueryBus);
    service = module.get<CompanyExploreService>(CompanyExploreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(queryBus).toBeDefined();
  });

  it(': Testing getDefaultCompany',async () => {
    const result = await service.getDefaultCompany();
    console.log(result);
    expect(result);
  });

  it(': Testing getCompanyByID', async () => {
    const result = await service.getCompanyById("123456789");
    //console.log(result);
    expect(result);
  });

  it(': Testing getSearchResults', async () => {
    const result = await service.getSearchResults("null3");
    //console.log(result);
    expect(result);
  });

  it(': Testing getTaggedCompany', async () => {
    const result = await service.getTaggedCompany("nice");
    //console.log(result);
    expect(result);
  });
});
