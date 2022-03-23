import { Test, TestingModule } from '@nestjs/testing';
import { ApiCompanyRepresentativeResolver } from './api-company-representative.resolver';

describe('ApiCompanyRepresentativeResolver', () => {
  let resolver: ApiCompanyRepresentativeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCompanyRepresentativeResolver],
    }).compile();

    resolver = module.get<ApiCompanyRepresentativeResolver>(ApiCompanyRepresentativeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
