import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CompanyExploreFeatureComponent } from './company-explore-feature/company-explore-feature.component';
import{CompanyExploreMaterialModule} from './materials/company-explore-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CompanyExploreFeatureComponent
  ],
  exports: [
    CompanyExploreFeatureComponent
  ],
})
export class ClientCompanyExploreFeatureModule {}
