import { TestBed } from '@angular/core/testing';
import { RequestForAccessService } from './request-for-access.service';

describe('RequestForAccessService', () => {
  let service: RequestForAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestForAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
