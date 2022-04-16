import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyExploreFeatureComponent } from './company-explore-feature/company-explore-feature.component';
import { UiModule } from '@graduates/client/shared/assets/ui';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyExploreBannerComponent } from './company-explore-feature/company-explore-banner/company-explore-banner.component';
import { CompanyExploreContentComponent } from './company-explore-feature/company-explore-content/company-explore-content.component';
import { CompanyExploreCardComponent } from './company-explore-feature/company-explore-content/company-explore-card/company-explore-card.component';
import { CompanyExploreOperationsBarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-searchbar/company-explore-searchbar.component';
import { CompanyExploreFilterComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-filter/company-explore-filter.component';
import { CompanyExploreRoutingModule } from './company-explore-feature/company-explore-routing.module';

@NgModule({
  imports: [CommonModule,
    CompanyExploreRoutingModule,
    UiModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CompanyExploreFeatureComponent,
    CompanyExploreBannerComponent,
    CompanyExploreContentComponent,
    CompanyExploreCardComponent,
    CompanyExploreOperationsBarComponent,
    CompanyExploreSearchbarComponent,
    CompanyExploreFilterComponent
  ],
  exports: [
    CompanyExploreFeatureComponent
  ],
})
export class ClientCompanyExploreFeatureModule {}
