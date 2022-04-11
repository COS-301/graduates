import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryExploreComponent } from './story-explore.component';

describe('StoryExploreComponent', () => {
  let component: StoryExploreComponent;
  let fixture: ComponentFixture<StoryExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
