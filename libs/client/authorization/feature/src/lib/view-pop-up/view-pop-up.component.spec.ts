import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPopUpComponent } from './view-pop-up.component';

describe('ViewPopUpComponent', () => {
  let component: ViewPopUpComponent;
  let fixture: ComponentFixture<ViewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
