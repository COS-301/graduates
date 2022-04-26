import { TestBed } from '@angular/core/testing';
import { CompanyRepresentativeService } from './company-representative-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

describe('CompanyRepresentativeServiceService', () => {
  let service: CompanyRepresentativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ApolloModule]
    });
    service = TestBed.inject(CompanyRepresentativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
