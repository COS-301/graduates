import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExploreComponent } from './blog-explore.component';
import { MatMenuModule } from '@angular/material/menu';

describe('BlogExploreComponent', () => {
  let component: BlogExploreComponent;
  let fixture: ComponentFixture<BlogExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogExploreComponent ],
      imports: [
        MatMenuModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
