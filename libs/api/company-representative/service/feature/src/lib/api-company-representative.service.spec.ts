import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyRepresentativeService } from './api-company-representative.service';

describe('ApiCompanyRepresentativeService', () => {
  let service: ApiCompanyRepresentativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCompanyRepresentativeService],
    }).compile();

    service = module.get<ApiCompanyRepresentativeService>(ApiCompanyRepresentativeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
