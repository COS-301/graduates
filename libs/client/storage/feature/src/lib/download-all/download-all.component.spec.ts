import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAllComponent } from './download-all.component';

describe('DownloadAllComponent', () => {
  let component: DownloadAllComponent;
  let fixture: ComponentFixture<DownloadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
