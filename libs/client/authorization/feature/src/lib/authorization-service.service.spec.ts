import { TestBed } from '@angular/core/testing';

import { AuthorizationServiceService } from './authorization-service.service';

describe('AuthorizationServiceService', () => {
  let service: AuthorizationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
