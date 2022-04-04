import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CompanyExploreFeatureComponent } from './company-explore-feature/company-explore-feature.component';
import{CompanyExploreMaterialModule} from './materials/company-explore-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyExploreBannerComponent } from './company-explore-feature/company-explore-banner/company-explore-banner.component';
import { CompanyExploreContentComponent } from './company-explore-feature/company-explore-content/company-explore-content.component';
import { CompanyExploreCardComponent } from './company-explore-feature/company-explore-content/company-explore-card/company-explore-card.component';
import { CompanyExploreOperationsBarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-operations-bar.component';
import { CompanyExploreSearchbarComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-searchbar/company-explore-searchbar.component';
import { CompanyExploreFilterComponent } from './company-explore-feature/company-explore-operations-bar/company-explore-filter/company-explore-filter.component';

export const clientCompanyExploreFeatureRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule,
    RouterModule,
    CompanyExploreMaterialModule,
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
