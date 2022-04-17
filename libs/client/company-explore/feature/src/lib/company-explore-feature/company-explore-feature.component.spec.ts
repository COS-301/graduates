import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@graduates/client/shared/assets/ui';
import { NgxsModule } from '@ngxs/store';
import { CompanyExploreBannerComponent } from './company-explore-banner/company-explore-banner.component';
import { CompanyExploreCardComponent } from './company-explore-content/company-explore-card/company-explore-card.component';
import { CompanyExploreContentComponent } from './company-explore-content/company-explore-content.component';

import { CompanyExploreFeatureComponent } from './company-explore-feature.component';
import { CompanyExploreFilterComponent } from './company-explore-operations-bar/company-explore-filter/company-explore-filter.component';
import { CompanyExploreOperationsBarComponent } from './company-explore-operations-bar/company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-operations-bar/company-explore-searchbar/company-explore-searchbar.component';
import { CompanyExploreState } from './store/company-explore.state';

describe('CompanyExploreFeatureComponent', () => {
  let component: CompanyExploreFeatureComponent;
  let fixture: ComponentFixture<CompanyExploreFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[UiModule,HttpClientModule,RouterTestingModule,FormsModule],
      providers:[HttpClientModule],
      declarations: [ CompanyExploreFeatureComponent,
      CompanyExploreBannerComponent,
      CompanyExploreOperationsBarComponent,
      CompanyExploreFilterComponent,CompanyExploreSearchbarComponent,
      CompanyExploreContentComponent,
      CompanyExploreCardComponent]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CompanyExploreState])]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyExploreFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
