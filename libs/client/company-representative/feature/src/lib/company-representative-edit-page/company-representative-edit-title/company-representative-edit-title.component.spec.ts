import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeEditTitleComponent } from './company-representative-edit-title.component';

describe('CompanyRepresentativeEditTitleComponent', () => {
  let component: CompanyRepresentativeEditTitleComponent;
  let fixture: ComponentFixture<CompanyRepresentativeEditTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeEditTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
