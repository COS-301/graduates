import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthorizationResolver } from './api-authorization.resolver';

describe('ApiAuthorizationResolver', () => {
  let resolver: ApiAuthorizationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAuthorizationResolver],
    }).compile();

    resolver = module.get<ApiAuthorizationResolver>(ApiAuthorizationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
