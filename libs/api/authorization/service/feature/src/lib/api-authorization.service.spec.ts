import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthorizationService } from './api-authorization.service';

describe('ApiAuthorizationService', () => {
  let service: ApiAuthorizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiAuthorizationService],
    }).compile();

    service = module.get<ApiAuthorizationService>(ApiAuthorizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
