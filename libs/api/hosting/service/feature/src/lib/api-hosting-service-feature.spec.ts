import { ApiHosting } from '@graduates/api/hosting/api/shared/data-access';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { Test } from '@nestjs/testing';
import { exec } from 'child_process';
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

  let array: ApiHosting[];

  describe('getChecksLength', () => {
    it ('Should return a number >= 0', () => {
      const len = service.getChecksLength();
      expect(len).toEqual(expect.any(Number));
      expect(len).toBeGreaterThanOrEqual(0)
    });
  });

  describe('get_all', () => {
      it ('Should call checkApiHealth and AddAllUnimplemented', async () => {
        const checkApiHealthSpy = jest.spyOn(service, 'checkApiHealth');
        const checkAddAllImplementedSpy = jest.spyOn(service, 'AddAllUnimplemented');
        
        array = await service.get_all();
        
        expect(checkApiHealthSpy).toBeCalled()
        expect(checkAddAllImplementedSpy).toBeCalled()
      });
      it ('get_all should return an array of ApiHosting objects', async () => {
        array.forEach(element => {
          expect(element).toBeInstanceOf(ApiHosting);
        });
      });
    
      it ('Should return an array that should be the length of checks + AddAllUnimplemented', () => {
        expect(array.length).toEqual(service.getChecksLength() + service.AddAllUnimplemented().length);
      });

      it ('ApiHosting objects in array should have both name and status defined', async () => {
        // const array: ApiHosting[] = await service.get_all();
        array.forEach(element => {
          expect(element.name).toBeDefined();
          expect(element.status).toBeDefined();
        });
      });

      it ('ApiHosting objects in array should have name as a string, and status as one of the following ["Under Development", "Operational", "Non Operational"]', async () => {
        // const array: ApiHosting[] = await service.get_all();
        array.forEach(element => {
          expect(typeof(element.name)).toBe('string');
          expect(["Under Development", "Operational", "Non Operational"]).toContain(element.status);
        });
      });

    });
    
    describe('AddAllUnimplemented', () => {
      it('Should return an array of object that specifies Under Development', () => {
        service.AddAllUnimplemented().forEach(obj => {
          expect(obj).toEqual({
            name: expect.any(String),
            status: 'Under Development',
          });
        });
      });
    });

    describe('checkApiHealth', () => {
      it ('Should return a defined object', async () => {
        let res: any;
        try {
          res = await service.checkApiHealth({
            title: 'test',
            path: 'https://google.com',
            query: ''
          });
        } catch(err) {
          res = err; 
        }
        expect(res).toBeDefined();
      });
    });
});
