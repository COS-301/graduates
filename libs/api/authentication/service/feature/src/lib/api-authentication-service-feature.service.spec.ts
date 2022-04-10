import { Test } from '@nestjs/testing';
import { ApiAuthenticationServiceFeatureService } from './api-authentication-service-feature.service';

describe('ApiAuthenticationServiceFeatureService', () => {
  let service: ApiAuthenticationServiceFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAuthenticationServiceFeatureService],
    }).compile();

    service = module.get(ApiAuthenticationServiceFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
