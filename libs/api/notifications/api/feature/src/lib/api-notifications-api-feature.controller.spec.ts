import { Test } from '@nestjs/testing';
import { ApiNotificationsApiFeatureController } from './api-notifications-api-feature.controller';

describe('ApiNotificationsApiFeatureController', () => {
  let controller: ApiNotificationsApiFeatureController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiNotificationsApiFeatureController],
    }).compile();

    controller = module.get(ApiNotificationsApiFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
