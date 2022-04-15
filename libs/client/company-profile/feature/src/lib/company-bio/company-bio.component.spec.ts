import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBioComponent } from './company-bio.component';

describe('CompanyBioComponent', () => {
  let component: CompanyBioComponent;
  let fixture: ComponentFixture<CompanyBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
