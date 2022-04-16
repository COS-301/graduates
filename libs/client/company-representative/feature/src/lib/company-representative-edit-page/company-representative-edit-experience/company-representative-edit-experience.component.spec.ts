import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditExperienceComponent } from './company-representative-edit-experience.component';

describe('CompanyRepresentativeEditExperienceComponent', () => {
  let component: CompanyRepresentativeEditExperienceComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeEditExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeEditExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
