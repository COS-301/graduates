import { ApiAdminConsoleServiceFeatureModule } from '@graduates/api/adminconsole/service/feature';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiAdminConsoleResolver } from './api-adminconsole.resolver';

describe('ApiAdminConsoleResolver', () => {
  let resolver: ApiAdminConsoleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAdminConsoleResolver, ApiAdminConsoleServiceFeatureModule],
    }).compile();

    resolver = module.get<ApiAdminConsoleResolver>(ApiAdminConsoleResolver);
  });
  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
