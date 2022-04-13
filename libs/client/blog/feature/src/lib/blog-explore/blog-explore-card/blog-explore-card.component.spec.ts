import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExploreCardComponent } from './blog-explore-card.component';

describe('BlogExploreCardComponent', () => {
  let component: BlogExploreCardComponent;
  let fixture: ComponentFixture<BlogExploreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogExploreCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogExploreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
