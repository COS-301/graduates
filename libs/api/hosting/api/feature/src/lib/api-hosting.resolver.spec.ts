import { ApiHostingServiceFeatureModule } from "@graduates/api/hosting/service/feature";
import { Test, TestingModule } from '@nestjs/testing';
import { ApiHostingResolver } from "./api-hosting.resolver";

describe('ApStorageResolver', () => {
    let resolver:ApiHostingResolver;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [ApiHostingResolver, ApiHostingServiceFeatureModule],
      }).compile();
  
      resolver = module.get<ApiHostingResolver>(ApiHostingResolver);
    });
  
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });