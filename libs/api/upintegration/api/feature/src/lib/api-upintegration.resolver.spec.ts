import { Test, TestingModule } from '@nestjs/testing';
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { ApiUpIntegrationService } from '@graduates/api/upintegration/service/feature';
import { QueryBus } from '@nestjs/cqrs';

describe('ApiUpIntegrationResolver', () => {
  let resolver:ApiUpIntegrationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiUpIntegrationResolver, 
        ApiUpIntegrationService,
        QueryBus
      ],
    }).compile();

    await module.init();

    resolver = module.get<ApiUpIntegrationResolver>(ApiUpIntegrationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});