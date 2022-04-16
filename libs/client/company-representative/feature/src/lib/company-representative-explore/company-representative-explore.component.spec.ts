import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeExploreComponent } from './company-representative-explore.component';

describe('CompanyRepresentativeExploreComponent', () => {
  let component: CompanyRepresentativeExploreComponent;
  let fixture: ComponentFixture<CompanyRepresentativeExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
