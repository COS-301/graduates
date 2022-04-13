import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeAboutComponent } from './company-representative-about.component';

describe('CompanyRepresentativeAboutComponent', () => {
  let component: CompanyRepresentativeAboutComponent;
  let fixture: ComponentFixture<CompanyRepresentativeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
