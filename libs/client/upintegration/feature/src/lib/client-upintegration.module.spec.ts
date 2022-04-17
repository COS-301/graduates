import { async, TestBed } from '@angular/core/testing';
import { ClientUpintegrationModule } from './client-upintegration.module';

describe('ClientUpintegrationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientUpintegrationModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientUpintegrationModule).toBeDefined();
  });
});
