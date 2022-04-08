import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortsComponent } from './shorts.component';

describe('FeatureComponent', () => {
  let component: ShortsComponent;
  let fixture: ComponentFixture<ShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
