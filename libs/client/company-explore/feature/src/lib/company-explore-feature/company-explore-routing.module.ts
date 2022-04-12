import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyExploreFeatureComponent } from "./company-explore-feature.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyExploreFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyExploreRoutingModule { }
