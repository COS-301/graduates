import { async, TestBed } from '@angular/core/testing';
import { ClientCompanyNotificationsFeatureModule } from './client-company-notifications-feature.module';

describe('ClientCompanyNotificationsFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientCompanyNotificationsFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientCompanyNotificationsFeatureModule).toBeDefined();
  });
});
