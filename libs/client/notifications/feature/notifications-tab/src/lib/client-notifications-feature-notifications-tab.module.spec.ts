import { async, TestBed } from '@angular/core/testing';
import { ClientNotificationsFeatureNotificationsTabModule } from './client-notifications-feature-notifications-tab.module';

describe('ClientNotificationsFeatureNotificationsTabModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientNotificationsFeatureNotificationsTabModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientNotificationsFeatureNotificationsTabModule).toBeDefined();
  });
});
