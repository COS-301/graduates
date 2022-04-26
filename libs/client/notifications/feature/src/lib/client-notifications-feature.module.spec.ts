import { async, TestBed } from '@angular/core/testing';
import { ClientNotificationsFeatureModule } from './client-notifications-feature.module';

describe('ClientNotificationsFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientNotificationsFeatureModule],
    }).compileComponents();
  }));

  // Nothing to test here
  it('should have a module definition', () => {
    expect(ClientNotificationsFeatureModule).toBeDefined();
  });
});
