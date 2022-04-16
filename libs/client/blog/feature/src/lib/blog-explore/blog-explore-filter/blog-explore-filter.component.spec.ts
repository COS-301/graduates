import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExploreFilterComponent } from './blog-explore-filter.component';
import { MatMenuModule } from '@angular/material/menu';

describe('BlogExploreFilterComponent', () => {
  let component: BlogExploreFilterComponent;
  let fixture: ComponentFixture<BlogExploreFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [ BlogExploreFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogExploreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
