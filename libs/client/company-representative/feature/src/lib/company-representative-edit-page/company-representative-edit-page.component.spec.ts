import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditPageComponent } from './company-representative-edit-page.component';

describe('CompanyRepresentativeEditPageComponent', () => {
  let component: CompanyRepresentativeEditPageComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
