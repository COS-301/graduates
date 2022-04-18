import { async, TestBed } from '@angular/core/testing';
import { ClientBlogFeatureModule } from './client-blog-feature.module';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import {BlogExploreComponent} from './blog-explore/blog-explore.component';
import { BlogViewComponent } from './blog-view/blog-view.component';


// To run test "yarn test client-blog-feature"
describe('ClientBlogFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientBlogFeatureModule],
      declarations: [BlogCreateComponent, BlogExploreComponent, BlogViewComponent]
    }).compileComponents();
  }));

  
  it('should have a module definition of a blog', () => {
    expect(ClientBlogFeatureModule).toBeDefined();
  });
});
