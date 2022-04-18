import { Test } from '@nestjs/testing';
import { ApiUpIntegrationService } from './api-upintegration.service';
import { CommandBus } from '@nestjs/cqrs';

describe('ApiupintegrationService', () => {
  let service: ApiUpIntegrationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiUpIntegrationService,CommandBus],
    }).compile();

    service = module.get(ApiUpIntegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
