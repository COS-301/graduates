import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CompanyExploreService } from './company-explore.service';

describe('CompanyExploreService', () => {
  let service: CompanyExploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClientModule]
    });
    service = TestBed.inject(CompanyExploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
