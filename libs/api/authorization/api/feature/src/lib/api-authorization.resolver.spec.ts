import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature'

describe('ApiAuthorizationResolver', () => {
  let resolver: ApiAuthorizationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAuthorizationResolver,ApiAuthorizationService],
    }).compile();

    resolver = module.get<ApiAuthorizationResolver>(ApiAuthorizationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
