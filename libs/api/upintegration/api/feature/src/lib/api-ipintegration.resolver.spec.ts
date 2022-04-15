import { Test, TestingModule } from '@nestjs/testing';
import { ApiUpIntegrationResolver } from './api-upintegration.resolver';
import { ApiUpIntegrationServiceFeatureModule } from '@graduates/api/upintegration/service/feature';

describe('ApiUpIntegrationResolver', () => {
  let resolver:ApiUpIntegrationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiUpIntegrationResolver, 
        ApiUpIntegrationServiceFeatureModule
      ],
    }).compile();

    await module.init();

    resolver = module.get<ApiUpIntegrationResolver>(ApiUpIntegrationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});