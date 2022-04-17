import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativePageComponent } from './company-representative-page.component';

describe('CompanyRepresentativePageComponent', () => {
  let component: CompanyRepresentativePageComponent;
  let fixture: ComponentFixture<CompanyRepresentativePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
