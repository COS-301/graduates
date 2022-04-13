import { async, TestBed } from '@angular/core/testing';
import { ClientAdminconsoleFeatureModule } from './client-adminconsole-feature.module';

describe('ClientAdminconsoleFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientAdminconsoleFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientAdminconsoleFeatureModule).toBeDefined();
  });
});
