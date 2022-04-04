import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CompanyExploreFeatureComponent } from './company-explore-feature/company-explore-feature.component';
import{CompanyExploreMaterialModule} from './materials/company-explore-material.module';

export const clientCompanyExploreFeatureRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    CompanyExploreFeatureComponent
  ],
  exports: [
    CompanyExploreFeatureComponent
  ],
})
export class ClientCompanyExploreFeatureModule {}
