import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUploadComponent } from './story-upload.component';

describe('StoryUploadComponent', () => {
  let component: StoryUploadComponent;
  let fixture: ComponentFixture<StoryUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
