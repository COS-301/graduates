import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExploreComponent } from './blog-explore.component';
import { MatMenuModule } from '@angular/material/menu';

// To run test "yarn test client-blog-feature"
describe('BlogExploreComponent', () => {
  let component: BlogExploreComponent;
  let fixture: ComponentFixture<BlogExploreComponent>;

  const mockAdmin = true;
  const mocknewestFirstSort = true;
  const mockTemp = {};

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
    component.admin = mockAdmin;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
