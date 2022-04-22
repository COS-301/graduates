import { async, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { ClientAdminconsoleFeatureModule } from './client-adminconsole-feature.module';
import { Apollo, gql } from 'apollo-angular';

describe('ClientAdminconsoleFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, ClientAdminconsoleFeatureModule, Apollo],
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
