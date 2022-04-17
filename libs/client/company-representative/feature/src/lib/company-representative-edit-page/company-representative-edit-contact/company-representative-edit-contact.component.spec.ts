import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditContactComponent } from './company-representative-edit-contact.component';

describe('CompanyRepresentativeEditContactComponent', () => {
  let component: CompanyRepresentativeEditContactComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeEditContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
