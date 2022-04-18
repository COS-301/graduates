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

  it('should be called', () => {
    const spy = jest.spyOn(service, 'getCompany');
    service.getCompany('34232');
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch resource statuses from API', () => {
    const result = service.getCompany('4');
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });
});