import { ApiStorageServiceFeatureModule } from '@graduates/api/storage/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiStorageResolver } from './api-storage.resolver';

describe('ApStorageResolver', () => {
  let resolver:ApiStorageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiStorageResolver, ApiStorageServiceFeatureModule],
    }).compile();

    resolver = module.get<ApiStorageResolver>(ApiStorageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
