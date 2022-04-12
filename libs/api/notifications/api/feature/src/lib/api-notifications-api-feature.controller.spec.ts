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

  //Tests if component was created successfully
  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  //End of automatic nx generated tests

  it('returns all notifications',() => {
    expect(controller.returnAll()).toBe('will get all the notifications')
  })
});
