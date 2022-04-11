import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeContactComponent } from './company-representative-contact.component';

describe('CompanyRepresentativeContactComponent', () => {
  let component: CompanyRepresentativeContactComponent;
  let fixture: ComponentFixture<CompanyRepresentativeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
