import { Test, TestingModule } from '@nestjs/testing';
import { ApiAdminConsoleServiceFeature } from './api-adminconsole-service-feature.service';

describe('ApiAdminConsoleServiceFeature', () => {
  let service: ApiAdminConsoleServiceFeature;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAdminConsoleServiceFeature],
    }).compile();

    service = module.get<ApiAdminConsoleServiceFeature>(
      ApiAdminConsoleServiceFeature
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
