import { Test } from '@nestjs/testing';
import { ApiupintegrationService } from './api-upintegration.service';
import { CommandBus } from '@nestjs/cqrs';

describe('ApiupintegrationService', () => {
  let service: ApiupintegrationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiupintegrationService,CommandBus],
    }).compile();

    service = module.get(ApiupintegrationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
