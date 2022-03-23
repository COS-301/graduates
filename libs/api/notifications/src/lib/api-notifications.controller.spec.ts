import { Test } from '@nestjs/testing';
import { ApiNotificationsController } from './api-notifications.controller';
import { ApiNotificationsService } from './api-notifications.service';

describe('ApiNotificationsController', () => {
  let controller: ApiNotificationsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiNotificationsService],
      controllers: [ApiNotificationsController],
    }).compile();

    controller = module.get(ApiNotificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
