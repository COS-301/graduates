import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthorizationService } from './api-authorization.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiAuthorization } from '../../../../api/shared/src/lib/api-authorization.entity';
import { QueryBus } from '@nestjs/cqrs';

describe('ApiAuthorizationService', () => {
  let service: ApiAuthorizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAuthorizationService, ApiAuthorization, QueryBus],
    }).compile();

    service = module.get<ApiAuthorizationService>(ApiAuthorizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
