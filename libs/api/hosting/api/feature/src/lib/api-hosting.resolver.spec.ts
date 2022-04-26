import { ApiHostingServiceFeatureModule } from "@graduates/api/hosting/service/feature";
import { HttpModule } from "@nestjs/axios";
import { TerminusModule } from "@nestjs/terminus";
import { Test, TestingModule } from '@nestjs/testing';
import { ApiHostingResolver } from "./api-hosting.resolver";

describe('ApiHostingResolver', () => {
    let resolver:ApiHostingResolver;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [HttpModule, TerminusModule],
        providers: [ApiHostingResolver, ApiHostingServiceFeatureModule],
      }).compile();
  
      resolver = module.get<ApiHostingResolver>(ApiHostingResolver);
    });
  
    it('should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });