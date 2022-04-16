import { async, TestBed } from '@angular/core/testing';
import { UiComponentTabsModule } from './ui-component-tabs.module';

describe('UiComponentTabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiComponentTabsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(UiComponentTabsModule).toBeDefined();
  });
});
