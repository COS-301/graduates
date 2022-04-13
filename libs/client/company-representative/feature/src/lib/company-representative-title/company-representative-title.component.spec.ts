import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRepresentativeTitleComponent } from './company-representative-title.component';

describe('CompanyRepresentativeTitleComponent', () => {
  let component: CompanyRepresentativeTitleComponent;
  let fixture: ComponentFixture<CompanyRepresentativeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRepresentativeTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRepresentativeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
