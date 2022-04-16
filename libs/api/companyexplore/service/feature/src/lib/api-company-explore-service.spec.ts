import { Test, TestingModule } from '@nestjs/testing';
import { CompanyExploreService } from './api-company-explore-service';
import { CqrsModule } from '@nestjs/cqrs';

describe('CompanyExploreService', () => {
  let service: CompanyExploreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [CompanyExploreService],
    }).compile();

    service = module.get<CompanyExploreService>(CompanyExploreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
