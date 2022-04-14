import { Test, TestingModule } from '@nestjs/testing';
import { ApiNotificationsRepositoryDataAccessModule } from './api-notifications-repository-data-access.module';

describe('API Notifications Data Access Module', () => {
  let controller: ApiNotificationsRepositoryDataAccessModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiNotificationsRepositoryDataAccessModule],
    }).compile();

    controller = module.get<ApiNotificationsRepositoryDataAccessModule>(ApiNotificationsRepositoryDataAccessModule);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
