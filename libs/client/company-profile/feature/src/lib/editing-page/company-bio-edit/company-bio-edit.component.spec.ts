import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBioEditComponent } from './company-bio-edit.component';

describe('CompanyBioEditComponent', () => {
  let component: CompanyBioEditComponent;
  let fixture: ComponentFixture<CompanyBioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBioEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
