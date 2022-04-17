import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { Test } from '@nestjs/testing';
import exp = require('constants');
import { ApiHostingServiceFeatureModule } from './api-hosting-service-feature';

describe( 'ApiHostingServiceFeatureModule', () => {
  let service: ApiHostingServiceFeatureModule;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [HttpModule, TerminusModule],
      providers: [ ApiHostingServiceFeatureModule],
    }).compile();

    service = module.get (ApiHostingServiceFeatureModule);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('get_all', () => {
      it ('get_all should return an array of ApiHosting objects', async () => {
        const array: ApiHosting[] = await service.get_all();
        array.forEach(element => {
          expect(element).toBeInstanceOf(ApiHosting);
        });
      });
    
      it ('ApiHosting objects in array should have both name and status defined', async () => {
        const array: ApiHosting[] = await service.get_all();
        array.forEach(element => {
          expect(element.name).toBeDefined();
          expect(element.status).toBeDefined();
        });
      });

      it ('ApiHosting objects in array should have name as a string, and status as one of the following ["Under Development", "Operational", "Non Operational"]', async () => {
        const array: ApiHosting[] = await service.get_all();
        array.forEach(element => {
          expect(typeof(element.name)).toBe('string');
          expect(["Under Development", "Operational", "Non Operational"]).toContain(element.status);
        });
      });
  });
  
});
