import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeMockStudentExplorePageComponent } from './company-representative-mock-student-explore-page.component';

describe('CompanyRepresentativeMockStudentExplorePageComponent', () => {
  let component: CompanyRepresentativeMockStudentExplorePageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeMockStudentExplorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeMockStudentExplorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeMockStudentExplorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
