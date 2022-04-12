import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifDisplayComponent } from './notif-display.component';

describe('Notification Component Tests', () => {
  let component: NotifDisplayComponent;
  let fixture: ComponentFixture<NotifDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //End of default nx generated tests. Need to add unit tests here
  //As soon as program logic is implemented
});
