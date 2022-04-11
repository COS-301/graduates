import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeExperienceComponent } from './company-representative-experience.component';

describe('CompanyRepresentativeExperienceComponent', () => {
  let component: CompanyRepresentativeExperienceComponent;
  let fixture: ComponentFixture<CompanyRepresentativeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
