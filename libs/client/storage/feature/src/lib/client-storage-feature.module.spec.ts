import { async, TestBed } from '@angular/core/testing';
import { StorageFeatureModule } from './client-storage-feature.module';

describe('ClientStorageFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StorageFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(StorageFeatureModule).toBeDefined();
  });
});
