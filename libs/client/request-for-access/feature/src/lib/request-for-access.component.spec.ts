import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForAccessComponent } from './request-for-access.component';

describe('RequestForAccessComponent', () => {
  let component: RequestForAccessComponent;
  let fixture: ComponentFixture<RequestForAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
