import { Test } from '@nestjs/testing';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { ApiNotificationsService } from './api-notifications-service-feature.service';

describe('ApiNotificationsService', () => {
  let service: ApiNotificationsService;
  let eventBus: EventBus
  let queryBus: QueryBus

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiNotificationsService, EventBus, QueryBus, CommandBus],
    }).compile();

    service = module.get(ApiNotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
