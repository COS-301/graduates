import { ApiHostingServiceFeatureModule } from "@graduates/api/hosting/service/feature";
import { HttpModule } from "@nestjs/axios";
import { TerminusModule } from "@nestjs/terminus";
import { Test, TestingModule } from '@nestjs/testing';
import { ApiHostingResolver } from "./api-hosting.resolver";
import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';

describe('ApiHostingResolver', () => {
    let resolver:ApiHostingResolver;
    let service: ApiHostingServiceFeatureModule
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [HttpModule, TerminusModule],
        providers: [ApiHostingResolver, ApiHostingServiceFeatureModule],
      }).compile();
  
      resolver = module.get<ApiHostingResolver>(ApiHostingResolver);
      service = module.get<ApiHostingServiceFeatureModule>(ApiHostingServiceFeatureModule);
    });
  
    it('resolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    it('service should be defined', () => {
      expect(service).toBeDefined();
    });

    it('Should return an array of ApiHosting objects (mock)', async() => {
      const healthObj1: ApiHosting = new ApiHosting();
      const healthObj2: ApiHosting = new ApiHosting();
      healthObj1.name = "Test API 1";
      healthObj1.status = "Operational";
      
      healthObj2.name = "Test API 2";
      healthObj2.status = "Non Operational";

      const spy = jest.spyOn(service, 'get_all').mockImplementation(async() => [healthObj1, healthObj2]);
      const response =  await resolver.hosting();
      expect(spy).toBeCalled();
      expect(response).toEqual(expect.arrayContaining([expect.any(ApiHosting)]))
    });

    it ("Should return an array of ApiHosting objects (non-mock)", async () => {
      const response =  await resolver.hosting();
      expect(response).toEqual(expect.arrayContaining([expect.any(ApiHosting)]))
    }); 
  });