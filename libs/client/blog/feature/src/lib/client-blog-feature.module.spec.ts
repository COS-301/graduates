import { async, TestBed } from '@angular/core/testing';
import { ClientBlogFeatureModule } from './client-blog-feature.module';

describe('ClientBlogFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientBlogFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientBlogFeatureModule).toBeDefined();
  });
});
