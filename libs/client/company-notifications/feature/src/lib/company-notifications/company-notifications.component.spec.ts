import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNotificationsComponent } from './company-notifications.component';

describe('CompanyNotificationsComponent', () => {
  let component: CompanyNotificationsComponent;
  let fixture: ComponentFixture<CompanyNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
