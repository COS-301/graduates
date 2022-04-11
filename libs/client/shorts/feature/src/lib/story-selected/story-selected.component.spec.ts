import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySelectedComponent } from './story-selected.component';

describe('StorySelectedComponent', () => {
  let component: StorySelectedComponent;
  let fixture: ComponentFixture<StorySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorySelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
