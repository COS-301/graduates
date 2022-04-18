import { TestBed } from '@angular/core/testing';

import { ApiStudentProfileService } from './api-student-profile.service';

describe('ApiStudentProfileService', () => {
  let service: ApiStudentProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStudentProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
