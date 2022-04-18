import { async, TestBed } from '@angular/core/testing';
import { ClientSharedComponentsDropdownUiModule } from './client-shared-components-dropdown-ui.module';

describe('ClientSharedComponentsDropdownUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientSharedComponentsDropdownUiModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientSharedComponentsDropdownUiModule).toBeDefined();
  });
});
