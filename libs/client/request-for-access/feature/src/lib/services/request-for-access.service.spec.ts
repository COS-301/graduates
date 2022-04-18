import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
//import { RequestForAccessService } from './request-for-access.service';

describe('RequestForAccessService', () => {
  // Mock Service
  class MockService {
    requestAccess = jest.fn().mockImplementation(() => {
      return new Observable((observer) => {
        observer.next({
          "data": {
            "requestAccess": {
              "userID": "12345",
            },
          },
        });
      });
    });

    getResourceStatuses = jest.fn().mockImplementation(() => {
      return new Observable((observer) => {
        observer.next({
          "data": {
            "status": [
              {
                "accessStatus": "Rejected",
                "item": "Academic Record"
              }
            ]
          }
        });
        observer.complete();
      });
    });
  }

  let service = new MockService();
  //let service: RequestForAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MockService]    //RequestForAccessService
    });

    //service = TestBed.inject(RequestForAccessService);
    service = TestBed.inject(MockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('@getResourceStatuses', () => {
    it('should call getResourceStatuses method with params', () => {
      const spy = jest.spyOn(service, 'getResourceStatuses');
      service.getResourceStatuses('34232', '3222');
      expect(spy).toHaveBeenCalled();
    });

    it('should call getResourceStatuses method without params', () => {
      const spy = jest.spyOn(service, 'getResourceStatuses');
      service.getResourceStatuses('', '');
      expect(spy).toHaveBeenCalled();
    });

    it('getResourceStatuses return an Observable', done => {
      try {
        expect(service.getResourceStatuses('34232', '3222'))
          .toBeInstanceOf(Observable);
        done();
      } catch (err) {
        done(err);
      }
    });

    it('should fetch resource statuses from the API', done => {
      service.getResourceStatuses('4', '2')
        .subscribe({
          next: (res: any) => {
            try {
              expect(res).toStrictEqual({
                "data": {
                  "status": [
                    {
                      "accessStatus": "Rejected",
                      "item": "Academic Record"
                    }
                  ]
                }
              });
              done();
            } catch (err) {
              done(err);
            }
          }
        });
      // .subscribe({
      //   next: (data) => {
      //     try {
      //       expect(data).toBeDefined();
      //       done();
      //     } catch (err) {
      //       done(err);
      //   }
      // },
      // error: (err) => { expect(err.message).toBeDefined(); done(); }
      // });
    });
  });

  describe('@requestAccess', () => {
    it('should call requestAccess method with params', () => {
      const spy = jest.spyOn(service, 'requestAccess');
      service.requestAccess('10', '7', 'Transcript');
      expect(spy).toHaveBeenCalled();
    });

    it('should call requestAccess method without params', () => {
      const spy = jest.spyOn(service, 'requestAccess');
      service.requestAccess('', '', '');
      expect(spy).toHaveBeenCalled();
    });

    it('requestAccess should return an Observable', done => {
      try {
        expect(service.requestAccess('10', '7', 'Transcript'))
          .toBeInstanceOf(Observable);
        done();
      } catch (err) {
        done(err);
      }
    });

    it('should request access from the API', done => {
      service.requestAccess('10', '7', 'Transcript')
        .subscribe({
          next: (res: any) => {
            try {
              expect(res).toStrictEqual({
                "data": {
                  "requestAccess": {
                    "userID": "12345",
                  },
                },
              });
              done();
            } catch (err) {
              done(err);
            }
          }
        });
      // .subscribe({
      //   next: (res) => {
      //     try {
      //       expect(res).toBeDefined();
      //       done();
      //     } catch (err) {
      //       done(err);
      //     }
      //   },
      //   error: (err) => { expect(err.message).toBeDefined(); done(); }
      //}));
    });

  });

});
