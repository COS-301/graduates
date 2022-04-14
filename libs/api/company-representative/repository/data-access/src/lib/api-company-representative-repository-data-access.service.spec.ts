import { Test } from '@nestjs/testing';
import { ApiCompanyRepresentativeRepositoryDataAccessService } from './api-company-representative-repository-data-access.service';

describe('ApiCompanyRepresentativeRepositoryDataAccessService', () => {
  let service: ApiCompanyRepresentativeRepositoryDataAccessService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiCompanyRepresentativeRepositoryDataAccessService],
    }).compile();

    service = module.get(ApiCompanyRepresentativeRepositoryDataAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
