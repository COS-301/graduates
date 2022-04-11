import { async, TestBed } from '@angular/core/testing';
import { ClientNotificationsFeatureModule } from './client-notifications-feature.module';

describe('ClientNotificationsFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientNotificationsFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientNotificationsFeatureModule).toBeDefined();
  });
});
