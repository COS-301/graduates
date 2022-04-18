import { async, TestBed } from '@angular/core/testing';
import { ClientCompanyProfileFeatureModule } from './client-company-profile.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyProfileMaterialModule } from './materials/company-profile-material.module';

describe('ClientCompanyProfileFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientCompanyProfileFeatureModule,CompanyProfileMaterialModule],
      declarations: [ CompanyProfileComponent]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
    it('should have a module definition', () => {
    expect(ClientCompanyProfileFeatureModule).toBeDefined();
  });
});
