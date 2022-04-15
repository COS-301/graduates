import { Test, TestingModule } from '@nestjs/testing';
import { ApiNotificationsApiFeatureModule } from './api-notifications-api-feature.module';

describe('FeatureController', () => {
  let controller: ApiNotificationsApiFeatureModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiNotificationsApiFeatureModule],
    }).compile();

    controller = module.get<ApiNotificationsApiFeatureModule>(ApiNotificationsApiFeatureModule);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
