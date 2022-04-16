import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditAboutComponent } from './company-representative-edit-about.component';

describe('CompanyRepresentativeEditAboutComponent', () => {
  let component: CompanyRepresentativeEditAboutComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeEditAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeEditAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
