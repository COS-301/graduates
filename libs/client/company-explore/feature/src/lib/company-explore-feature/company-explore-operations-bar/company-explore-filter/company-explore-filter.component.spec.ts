import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyExploreMaterialModule } from '../../../materials/company-explore-material.module';

import { CompanyExploreFilterComponent } from './company-explore-filter.component';

describe('CompanyExploreFilterComponent', () => {
  let component: CompanyExploreFilterComponent;
  let fixture: ComponentFixture<CompanyExploreFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[CompanyExploreMaterialModule],
      declarations: [ CompanyExploreFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
