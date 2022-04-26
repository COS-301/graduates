import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyExploreFeatureComponent } from "./company-explore-feature.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyExploreFeatureComponent
  },
  {path: 'filter/:filter',component: CompanyExploreFeatureComponent },
  {path:'search/:search',component:CompanyExploreFeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyExploreRoutingModule { }
