import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifDisplayComponent } from './notif-display.component';

describe('NotifDisplayComponent', () => {
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
});
