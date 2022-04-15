import { async, TestBed } from '@angular/core/testing';
import { ClientCompanyExploreFeatureModule } from './client-company-explore-feature.module';
import { CompanyExploreBannerComponent } from './company-explore-feature/company-explore-banner/company-explore-banner.component';
import { CompanyExploreCardComponent } from './company-explore-feature/company-explore-content/company-explore-card/company-explore-card.component';
import { CompanyExploreContentComponent } from './company-explore-feature/company-explore-content/company-explore-content.component';
import { CompanyExploreFeatureComponent } from './company-explore-feature/company-explore-feature.component';
import { CompanyExploreFilterComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-filter/company-explore-filter.component';
import { CompanyExploreOperationsBarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-searchbar/company-explore-searchbar.component';
import { CompanyExploreMaterialModule } from './materials/company-explore-material.module';

describe('ClientCompanyExploreFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientCompanyExploreFeatureModule,CompanyExploreMaterialModule],
      declarations: [ CompanyExploreBannerComponent,
                      CompanyExploreCardComponent,
                      CompanyExploreContentComponent,
                      CompanyExploreFilterComponent,
                      CompanyExploreSearchbarComponent,
                      CompanyExploreOperationsBarComponent,
                      CompanyExploreFeatureComponent ]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ClientCompanyExploreFeatureModule).toBeDefined();
  });
});
