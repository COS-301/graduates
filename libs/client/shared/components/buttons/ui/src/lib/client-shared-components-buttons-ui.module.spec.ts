import { async, TestBed } from '@angular/core/testing';
import { ClientSharedComponentsButtonsUiModule } from './client-shared-components-buttons-ui.module';

describe('ClientSharedComponentsButtonsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientSharedComponentsButtonsUiModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientSharedComponentsButtonsUiModule).toBeDefined();
  });
});
