import { async, TestBed } from '@angular/core/testing';
import { ClientCompanyRepresentativeFeatureModule } from './client-company-representative-feature.module';

describe('ClientCompanyRepresentativeFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientCompanyRepresentativeFeatureModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientCompanyRepresentativeFeatureModule).toBeDefined();
  });
});
