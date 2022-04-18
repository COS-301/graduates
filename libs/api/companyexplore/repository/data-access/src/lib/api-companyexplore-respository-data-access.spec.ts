import { CompanyExploreRepository } from './api-companyexplore-repository-data-access';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
describe('CompanyExploreRepository', () => {
  let repo: CompanyExploreRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyExploreRepository],
      providers: [PrismaService],
    }).compile();

    repo = module.get<CompanyExploreRepository>(CompanyExploreRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  it(': Testing getDefaultCompany',async () => {
    const result = await repo.getDefaultCompany();
    console.log(result);
    expect(result);
  });

  it(': Testing getCompanyByID', async () => {
    const result = await repo.getCompanyById("123456789");
    console.log(result);
    expect(result);
  });

  it(': Testing getSearchResults', async () => {
    const result = await repo.getSearchResults("null3");
    console.log(result);
    expect(result);
  });

  it(': Testing getTaggedCompany', async () => {
    const result = await repo.getTaggedCompany("nice");
    console.log(result);
    expect(result);
  });
});


