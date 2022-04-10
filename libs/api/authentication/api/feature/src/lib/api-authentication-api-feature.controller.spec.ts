import { Test } from '@nestjs/testing';
import { ApiAuthenticationApiFeatureController } from './api-authentication-api-feature.controller';

describe('ApiAuthenticationApiFeatureController', () => {
  let controller: ApiAuthenticationApiFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiAuthenticationApiFeatureController],
    }).compile();

    controller = module.get(ApiAuthenticationApiFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
