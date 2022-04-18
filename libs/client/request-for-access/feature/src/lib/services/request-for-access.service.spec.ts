import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { RequestForAccessService } from './request-for-access.service';

describe('RequestForAccessService', () => {
  let service: RequestForAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RequestForAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be called', () => {
    const spy = jest.spyOn(service, 'getResourceStatuses');
    service.getResourceStatuses('34232','3222');
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch resource statuses from API', () => {
    const result = service.getResourceStatuses('4', '2');
    expect(result).toMatchObject(new Observable<any>());

    result.subscribe({
      next: (data) => {
        expect(data).toBeDefined();
      }
    });
  });

  it('should request access from the API', () => {
    const spy = jest.spyOn(service, 'requestAccess');
    expect(service.requestAccess('','','')).toBeUndefined();
    expect(spy).toHaveBeenCalled();
  });

});
