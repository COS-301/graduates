import { Test } from '@nestjs/testing';
import { ApiHostingServiceFeatureModule } from './api-hosting-service-feature';

describe( 'ApiHostingServiceFeatureModule', () => {
  let service: ApiHostingServiceFeatureModule;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ ApiHostingServiceFeatureModule],
    }).compile();

    service = module.get (ApiHostingServiceFeatureModule);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
