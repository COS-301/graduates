import { TestBed } from '@angular/core/testing';

import { ApiStudentProfileService } from './api-student-profile.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiStudentProfileService', () => {
  let service: ApiStudentProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ApiStudentProfileService]
    });
    service = TestBed.inject(ApiStudentProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
