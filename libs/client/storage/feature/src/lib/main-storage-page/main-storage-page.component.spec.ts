import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStoragePageComponent } from './main-storage-page.component';

describe('MainStoragePageComponent', () => {
  let component: MainStoragePageComponent;
  let fixture: ComponentFixture<MainStoragePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStoragePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStoragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
