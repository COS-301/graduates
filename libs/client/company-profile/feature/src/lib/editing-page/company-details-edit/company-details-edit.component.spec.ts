import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsEditComponent } from './company-details-edit.component';

describe('CompanyDetailsEditComponent', () => {
  let component: CompanyDetailsEditComponent;
  let fixture: ComponentFixture<CompanyDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
