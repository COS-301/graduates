import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsesTabComponent } from './responses-tab.component';

describe('ResponsesTabComponent', () => {
  let component: ResponsesTabComponent;
  let fixture: ComponentFixture<ResponsesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
