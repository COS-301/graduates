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
});


