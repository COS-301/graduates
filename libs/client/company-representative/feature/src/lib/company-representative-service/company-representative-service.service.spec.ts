import { TestBed } from '@angular/core/testing';
import { CompanyRepresentativeServiceService } from './company-representative-service.service';

describe('CompanyRepresentativeServiceService', () => {
  let service: CompanyRepresentativeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRepresentativeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
