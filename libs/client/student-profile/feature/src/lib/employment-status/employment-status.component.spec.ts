import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentStatusComponent } from './employment-status.component';

describe('EmploymentStatusComponent', () => {
  let component: EmploymentStatusComponent;
  let fixture: ComponentFixture<EmploymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
