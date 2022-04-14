import { async, TestBed } from '@angular/core/testing';
import { CompanyProfileModule } from './company-profile.module';
// import { CompanyExploreBannerComponent } from './company-explore-feature/company-explore-banner/company-explore-banner.component';
// import { CompanyExploreCardComponent } from './company-explore-feature/company-explore-content/company-explore-card/company-explore-card.component';
// import { CompanyExploreContentComponent } from './company-explore-feature/company-explore-content/company-explore-content.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
// import { CompanyExploreFilterComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-filter/company-explore-filter.component';
// import { CompanyExploreOperationsBarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-operations-bar.component';
// import { CompanyExploreSearchbarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-searchbar/company-explore-searchbar.component';
import { CompanyProfileMaterialModule } from './materials/company-profile-material.module';

describe('CompanyProfileModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CompanyProfileModule,CompanyProfileMaterialModule],
      declarations: [ CompanyProfileComponent]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
    it('should have a module definition', () => {
    expect(CompanyProfileModule).toBeDefined();
  });
});
