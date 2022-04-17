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

  it('should call getResourceStatuses method', () => {
    const spy = jest.spyOn(service, 'getResourceStatuses');
    service.getResourceStatuses('34232', '3222');
    expect(spy).toHaveBeenCalled();
  });

  it('should call requestAccess method', () => {
    const spy = jest.spyOn(service, 'requestAccess');
    service.requestAccess('10', '7', 'Transcript');
    expect(spy).toHaveBeenCalled();
  });

  it('should return an Observable', done => {
    try {
      expect(service.getResourceStatuses('34232', '3222'))
        .toBeInstanceOf(Observable);
    } catch (err) {
      done(err);
    }

    try {
      expect(service.requestAccess('10', '7', 'Transcript'))
        .toBeInstanceOf(Observable);
    } catch (err) {
      done(err);
    }
    done();
  });

  it('should fetch resource statuses from the API', done => {
    service.getResourceStatuses('4', '2')
      .subscribe({
        next: (data) => {
          try {
            expect(data).toBeDefined();
            done();
          } catch (err) {
            done(err);
          }
        }
      });
  });

  it('should request access from the API', done => {
    expect(service.requestAccess('10', '7', 'Transcript')
      .subscribe({
        next: (res) => {
          try {
            expect(res).toBeDefined();
            done();
          } catch (err) {
            done(err);
          }
        }
      }));
  });

});
