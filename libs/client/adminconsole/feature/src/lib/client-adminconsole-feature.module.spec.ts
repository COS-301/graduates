import { async, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { ClientAdminconsoleFeatureModule } from './client-adminconsole-feature.module';

describe('ClientAdminconsoleFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, ClientAdminconsoleFeatureModule],
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
