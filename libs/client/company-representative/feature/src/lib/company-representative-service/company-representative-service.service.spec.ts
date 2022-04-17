import { TestBed } from '@angular/core/testing';
import { CompanyRepresentativeServiceService } from './company-representative-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('CompanyRepresentativeServiceService', () => {
  let service: CompanyRepresentativeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CompanyRepresentativeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
