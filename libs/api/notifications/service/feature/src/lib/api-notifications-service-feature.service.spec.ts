import { Test } from '@nestjs/testing';
import { ApiNotificationsServiceFeatureService } from './api-notifications-service-feature.service';

describe('ApiNotificationsServiceFeatureService', () => {
  let service: ApiNotificationsServiceFeatureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiNotificationsServiceFeatureService],
    }).compile();

    service = module.get(ApiNotificationsServiceFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
