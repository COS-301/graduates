import { Test } from '@nestjs/testing';
import { ApiStorageServiceFeatureModule } from './api-storage-service-feature';

describe( 'ApiStorageServiceFeatureModule', () => {
  let service: ApiStorageServiceFeatureModule;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ ApiStorageServiceFeatureModule],
    }).compile();

    service = module.get (ApiStorageServiceFeatureModule);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
