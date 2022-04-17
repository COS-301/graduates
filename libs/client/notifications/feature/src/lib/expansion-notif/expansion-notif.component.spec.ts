import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionNotifComponent } from './expansion-notif.component';

describe('ExpansionNotifComponent', () => {
  let component: ExpansionNotifComponent;
  let fixture: ComponentFixture<ExpansionNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
