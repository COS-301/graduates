import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CompanyProfileService } from './company-profile.service';

describe('RequestForAccessService', () => {
  let service: CompanyProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CompanyProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('changeMessage should be called', () => {
    const spy = jest.spyOn(service, 'changeMessage');
    service.changeMessage("test");
    expect(spy).toHaveBeenCalled();
  });

  it('runQuery should be called', () => {
    const spy = jest.spyOn(service, 'runQuery');
    service.runQuery("test");
    expect(spy).toHaveBeenCalled();
  });

  it('getCompany should be called', () => {
    const spy = jest.spyOn(service, 'getCompany');
    service.getCompany();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch company info from API', () => {
    const result = service.getCompany();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('getNumbers should be called', () => {
    const spy = jest.spyOn(service, 'getNumbers');
    service.getNumbers();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch company numbers from API', () => {
    const result = service.getNumbers();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('getLocation should be called', () => {
    const spy = jest.spyOn(service, 'getLocation');
    service.getLocation();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch resource statuses from API', () => {
    const result = service.getLocation();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('getEmail should be called', () => {
    const spy = jest.spyOn(service, 'getEmail');
    service.getEmail();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch company emails from API', () => {
    const result = service.getEmail();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('getSocials should be called', () => {
    const spy = jest.spyOn(service, 'getSocials');
    service.getSocials();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch social media links for the company from API', () => {
    const result = service.getSocials();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('getBio should be called', () => {
    const spy = jest.spyOn(service, 'getBio');
    service.getBio();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch company bio from API', () => {
    const result = service.getBio();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('getRepresentatives should be called', () => {
    const spy = jest.spyOn(service, 'getRepresentatives');
    service.getRepresentatives();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch a list of representatives for the company from API', () => {
    const result = service.getRepresentatives();
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('setBio should be called', () => {
    const spy = jest.spyOn(service, 'setBio');
    service.setBio("test");
    expect(spy).toHaveBeenCalled();
  });

  it('should update the company bio through the API', () => {
    const result = service.setBio("test");
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });
});