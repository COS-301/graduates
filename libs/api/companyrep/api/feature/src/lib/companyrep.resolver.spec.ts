import { Test, TestingModule } from '@nestjs/testing';
import { CompanyrepResolver } from './companyrep.resolver';

describe('CompanyrepResolver', () => {
  let resolver: CompanyrepResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyrepResolver],
    }).compile();

    resolver = module.get<CompanyrepResolver>(CompanyrepResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
