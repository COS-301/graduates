import { async, TestBed } from '@angular/core/testing';
import { ApiUpintegrationApiFeatureModule } from './api-upintegration.module';

describe('ApiIntegrationApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApiUpintegrationApiFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ApiUpintegrationApiFeatureModule).toBeDefined();
  });
});
