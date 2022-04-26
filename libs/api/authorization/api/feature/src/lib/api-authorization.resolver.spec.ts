import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthorizationResolver } from './api-authorization.resolver';
import { ApiAuthorizationService } from '@graduates/api/authorization/service/feature';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';

describe('ApiAuthorizationResolver', () => {
  let resolver: ApiAuthorizationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiAuthorizationResolver,
        ApiAuthorizationService,
        ApiAuthorization,
        QueryBus,
      ],
    }).compile();

    resolver = module.get<ApiAuthorizationResolver>(ApiAuthorizationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
