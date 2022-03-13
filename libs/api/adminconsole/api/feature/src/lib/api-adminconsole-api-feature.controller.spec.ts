import { Test } from '@nestjs/testing';
import { ApiAdminconsoleApiFeatureController } from './api-adminconsole-api-feature.controller';

describe('ApiAdminconsoleApiFeatureController', () => {
  let controller: ApiAdminconsoleApiFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiAdminconsoleApiFeatureController],
    }).compile();

    controller = module.get(ApiAdminconsoleApiFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
