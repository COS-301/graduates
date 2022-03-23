import { Test } from '@nestjs/testing';
import { ApiNotificationsService } from './api-notifications.service';

describe('ApiNotificationsService', () => {
  let service: ApiNotificationsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiNotificationsService],
    }).compile();

    service = module.get(ApiNotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
